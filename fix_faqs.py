import os
from bs4 import BeautifulSoup

def fix_tool_page(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        html = f.read()

    soup = BeautifulSoup(html, 'html.parser')
    
    faq_items_data = []
    seen_questions = set()
    
    for item in soup.find_all('div', class_='faq-item'):
        q_btn = item.find('button', class_='faq-question')
        ans_div = item.find('div', class_='faq-answer')
        if not q_btn or not ans_div:
            continue
            
        q_text = q_btn.text.replace('+', '').strip()
        
        if q_text not in seen_questions:
            seen_questions.add(q_text)
            clean_item = soup.new_tag('div', **{'class': 'faq-item'})
            btn = soup.new_tag('button', **{'class': 'faq-question'})
            btn.string = q_text + " "
            span = soup.new_tag('span', **{'class': 'faq-icon'})
            span.string = "+"
            btn.append(span)
            clean_item.append(btn)
            
            clean_ans = soup.new_tag('div', **{'class': 'faq-answer'})
            clean_ans.append(BeautifulSoup(ans_div.decode_contents(), 'html.parser'))
            clean_item.append(clean_ans)
            
            faq_items_data.append(clean_item)
            
    context_para = None
    for p in soup.find_all('p'):
        if p.text and "For more utilities, check out our" in p.text:
            context_para = soup.new_tag('p', style="margin-top:1.5rem;")
            context_para.append(BeautifulSoup(p.decode_contents(), 'html.parser'))
            p.decompose()

    related_list_ul = None
    for rel_tools in soup.find_all('div', class_='related-tools'):
        ul = rel_tools.find('ul')
        if ul:
            related_list_ul = soup.new_tag('ul', style="list-style-type: disc; padding-left: 1.5rem; line-height: 1.8;")
            related_list_ul.append(BeautifulSoup(ul.decode_contents(), 'html.parser'))
        rel_tools.decompose()

    # Find the insertion point before decomposing
    first_faq = soup.find('section', class_='faq-section')
    if not first_faq:
        # maybe it's in the container without section
        first_faq = soup.find('div', class_='faq-list')
        if first_faq:
            first_faq = first_faq.parent
            
    if first_faq:
        insertion_target = first_faq.previous_sibling
        parent = first_faq.parent
    else:
        insertion_target = soup.find('article', class_='seo-content')
        if insertion_target:
            parent = insertion_target.parent
        else:
            print(f"Skipping {file_path}: No insertion point")
            return

    for faq_sec in soup.find_all('section', class_='faq-section'):
        faq_sec.decompose()
        
    for stray_item in soup.find_all('div', class_='faq-item'):
        stray_item.decompose()

    # Reconstruct
    is_in_container = 'container' in parent.get('class', [])
    
    # We will build a unified wrapper and insert after insertion_target
    wrapper = soup.new_tag('div', **{'class': 'seo-injections-wrapper'})
    
    if is_in_container:
        if context_para:
            wrapper.append(context_para)
        if related_list_ul:
            rel_div = soup.new_tag('div', **{'class': 'related-tools', 'style': 'margin-bottom: 2rem;'})
            rel_h2 = soup.new_tag('h2')
            rel_h2.string = "Related Tools"
            rel_div.append(rel_h2)
            rel_div.append(related_list_ul)
            wrapper.append(rel_div)
            
        faq_sec = soup.new_tag('section', **{'class': 'faq-section', 'style': 'padding:1rem 0; border-top:none'})
        faq_h2 = soup.new_tag('h2')
        faq_h2.string = "Frequently Asked Questions"
        faq_sec.append(faq_h2)
        
        faq_list = soup.new_tag('div', **{'class': 'faq-list'})
        for item in faq_items_data:
            faq_list.append(item)
            
        faq_sec.append(faq_list)
        wrapper.append(faq_sec)
        
    else:
        if context_para or related_list_ul:
            rel_sec = soup.new_tag('section', style="padding: 2rem 0 0 0;")
            rel_cont = soup.new_tag('div', **{'class': 'container'})
            rel_sec.append(rel_cont)
            
            if context_para:
                rel_cont.append(context_para)
            if related_list_ul:
                rel_div = soup.new_tag('div', **{'class': 'related-tools', 'style': 'margin-top: 2rem; margin-bottom: 2rem;'})
                rel_h2 = soup.new_tag('h2')
                rel_h2.string = "Related Tools"
                rel_div.append(rel_h2)
                rel_div.append(related_list_ul)
                rel_cont.append(rel_div)
                
            wrapper.append(rel_sec)
            
        faq_sec = soup.new_tag('section', **{'class': 'faq-section', 'style': 'padding:3rem 0;'})
        faq_cont = soup.new_tag('div', **{'class': 'container'})
        faq_sec.append(faq_cont)
        
        faq_h2 = soup.new_tag('h2', style="margin-bottom: 1.5rem;")
        faq_h2.string = "Frequently Asked Questions"
        faq_cont.append(faq_h2)
        
        faq_list = soup.new_tag('div', **{'class': 'faq-list'})
        for item in faq_items_data:
            faq_list.append(item)
            
        faq_cont.append(faq_list)
        wrapper.append(faq_sec)

    # Insert wrapper
    if insertion_target:
        insertion_target.insert_after(wrapper)
    else:
        parent.append(wrapper)
        
    # Unwrap wrapper so it doesn't leave a stray div
    wrapper.unwrap()

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(str(soup))
    print(f"Fixed {os.path.basename(file_path)}")

if __name__ == '__main__':
    tools_dir = os.path.join(os.path.dirname(__file__), 'tools')
    for filename in os.listdir(tools_dir):
        if filename.endswith('.html'):
            fix_tool_page(os.path.join(tools_dir, filename))
