---
title: "{{ replace .Name "-" " " | title }}"
layout: {{ .Name }}
description: "This is the meta description for pages"
menu:
  main:
    weight: 10
url: "/{{ .Name }}"
draft: true
---
