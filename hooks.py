import shutil
from pathlib import Path

def copy_schemas(*args, **kwargs):
    # In order to serve schemas directly from our GitHub site, we need to load them into the site directory
    # at doc buildtime. We need them to be at relative path ../schema relative to the markdown directory to 
    # preserve compatibility of relative links on GitHub vs MkDocs/GitHub Pages
    shutil.copytree("schema", "./site/schema", dirs_exist_ok=True)
    