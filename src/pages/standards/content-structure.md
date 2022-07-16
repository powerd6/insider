---
layout: "@layouts/MarkdownLayout.astro"
title: Content Structure
---
When writing [content](/glossary/content), some rules must be followed.

These rules are necessary to allow for automation and tooling, but they provide enough flexibility for most use-cases.

## Structure

The only required field that all contents have an unique identifier: `id`.

This field is the identifier with which references to the content in question can be made and they are also how content can be overwritten or extended.

### Generic content

An usual shape of content is a content with a `title` and some text.

This content shape is pretty generic and has the following fields:

- `title`: The title of the content in question.
- `excerpt`: An optional field that summarizes the content into one or two sentences.
- `body`: The markdown content body.

```yaml
id: sample-content
title: Sample Content Title
excerpt: Lorem ipsum dolor sit amet.
body: |
  [Lorem ipsum](https://www.lipsum.com/) dolor sit amet, consectetur adipiscing elit.
  
  Proin tellus enim, ullamcorper sed elit vel, gravida varius tortor. Morbi efficitur iaculis venenatis.
  
  ![Lorem ipsum](./sample-image.png)
  
  [Pellentesque](#another-content-id) ac auctor nisi. Vivamus lobortis, enim dictum ultrices maximus, neque libero sagittis tortor, ac porta urna leo sed nisl.
```

## Writing content

### 1: Each piece of content is contained within a single folder.

For example, for a content identified as `test`, the following folder structure could be used:

```
📦test
 ┣ 📜_.yaml
 ┣ 📜body.md
 ┗ 📜excerpt.txt
```

### 2: The contents of each file are mapped to a field based on the filename.

In the example above, there are three files:

- `_.yaml`
- `body.md`
- `excerpt.txt`

The `body` and `excerpt` fields on the content will receive the raw contents of their respective files.

#### 2.1: The filename `_` maps to the root of the content

The file named `_` is special. This file can contain multiple fields.

Each field defined inside the `_` file will be mapped to the root of the content structure.

For example, if the file contents are as follows:

```yaml
test: "test"
list:
  - name: "A"
    size: 1
  - name: "B"
    size: 2
```

then the module will have new fields named `test` and `list` with the same values as defined in the original file.

### 3: When no `id` is provided, the folder name will be used as the identifier.

Providing an explicit `id` field is recommended to prevent breaking references when reorganizing modules, however, it is not required.

The `id` field is generated as a fall back as the list of folders from the root of the module, separated with dashes.

For the following folder structure:

```
📦module
 ┗ 📂items
   ┣ 📂consumables
   ┃ ┗ 📂second-content
   ┃   ┗ 📜_.yaml
   ┗ 📂first-content
     ┗ 📜_.yaml
```

There will be two contents with the following identifiers:

| Content | `id`|
| --- | --- | 
| first-content | `items-first-content` | 
| second-content | `items-consumables-second-content` | 