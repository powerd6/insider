---
layout: "@layouts/TerminologyMdLayout.astro"
title: Content Type
description: A content's type is the shape of a piece of content
external_references:
  - title: 'Experiment: Defining structure for content authoring'
    href: https://github.com/powerd6/experiments/tree/1-define-structure-for-content-authoring
---
The combination of all fields that a [content](/terminology/content) piece can have are it's type.

In addition to detailing the structure of a content piece, the type is how we can determine how a certain piece of content should be rendered.

## The bare minimum

All content have a set of mandatory fields. These are:

- `id` : An unique identifier for that content piece.
- `content_type` : The name of the type a content piece follows.