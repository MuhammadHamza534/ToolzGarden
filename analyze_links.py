import os
import re
from bs4 import BeautifulSoup
from collections import defaultdict

def analyze_links():
    root_dir = "d:/ToolzGarden"
    tools_dir = os.path.join(root_dir, "tools")
    
    all_pages = []
    
    for filename in os.listdir(root_dir):
        if filename.endswith(".html"):
            all_pages.append(filename)
            
    for filename in os.listdir(tools_dir):
        if filename.endswith(".html"):
            all_pages.append("tools/" + filename)
            
    links = defaultdict(list)
    incoming = defaultdict(int)
    
    for page in all_pages:
        incoming[page] = 0 # Initialize incoming
    
    for page in all_pages:
        if page.startswith("tools/"):
            filepath = os.path.join(tools_dir, page.replace("tools/", ""))
            current_dir = "tools"
        else:
            filepath = os.path.join(root_dir, page)
            current_dir = "root"
            
        with open(filepath, 'r', encoding='utf-8') as f:
            soup = BeautifulSoup(f.read(), 'html.parser')
            
        for a in soup.find_all('a', href=True):
            href = a['href']
            
            # normalize href
            if href.startswith('http') or href.startswith('#') or href.startswith('mailto:') or href.startswith('tel:'):
                continue
                
            # resolve relative paths
            target = href.split('#')[0]
            if not target:
                continue
                
            if current_dir == "root":
                if target.startswith("tools/"):
                    normalized = target
                else:
                    normalized = target.replace('./', '')
            else: # in tools/
                if target.startswith("../"):
                    normalized = target.replace('../', '')
                else:
                    normalized = "tools/" + target.replace('./', '')
                    
            if normalized in all_pages:
                links[page].append(normalized)
                incoming[normalized] += 1
                
    # Analysis
    orphans = [p for p in all_pages if incoming[p] == 0 and p != "index.html"]
    weakly_linked = [(p, incoming[p]) for p in all_pages if 0 < incoming[p] <= 2]
    
    print("Total Pages:", len(all_pages))
    print("\n--- Orphan Pages ---")
    for o in orphans:
        print("-", o)
        
    print("\n--- Weakly Linked Pages (1-2 incoming links) ---")
    weakly_linked.sort(key=lambda x: x[1])
    for w, count in weakly_linked:
        print(f"- {w} ({count} links)")
        
    print("\n--- Pages with the most incoming links ---")
    most_linked = sorted([(p, incoming[p]) for p in all_pages], key=lambda x: x[1], reverse=True)[:5]
    for m, count in most_linked:
        print(f"- {m} ({count} links)")
        
    print("\n--- About/Contact/Terms/Privacy incoming links ---")
    for p in ["about.html", "contact.html", "terms.html", "privacy.html"]:
        print(f"- {p} ({incoming[p]} links)")

if __name__ == "__main__":
    analyze_links()
