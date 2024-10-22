# 🍲 Cooking With Ross

**Cooking With Ross** is a recipe website built with **Astro** and styled with **Tailwind CSS**. It offers an easy way to manage and display delicious recipes using Markdown, providing a clean and responsive interface.

## 🚀 Features
- Recipes written in Markdown with metadata support
- Responsive design with Tailwind CSS
- Dynamic recipe pages powered by Astro
- Easy navigation with a global header

## 📂 Project Structure

```
/src
    /content
        /recipes # Markdown recipes
    /layouts # Layout templates
    /pages # Routes and static pages
```

## 🛠️ Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/rossreicks/cooking-with-ross.git
   cd cooking-with-ross
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## 📝 How to add a recipe

1. Create a new Markdown file in src/content/recipes/.

2. Use this template:

```markdown
---
title: "Recipe Title"
date: 2024-10-21
prep_time: "15m"
cook_time: "30m"
tags: ["tag1", "tag2"]
servings: 4
---
```

3. Add your recipe content below the metadata.

## 💻 Technologies Used

- Astro
- Tailwind CSS
