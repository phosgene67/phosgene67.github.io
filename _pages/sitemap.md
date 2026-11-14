---
layout: "single"
title: "Sitemap"
permalink: "/sitemap/"
author_profile: true
---

<ul>
{% for link in site.data.navigation.main %}
  <li><a href="{{ link.url | relative_url }}">{{ link.title }}</a></li>
{% endfor %}
</ul>
<h2>Projects</h2>
<ul>
{% assign projects = site.portfolio | sort: 'order' %}
{% for project in projects %}
  <li><a href="{{ project.url | relative_url }}">{{ project.title }}</a></li>
{% endfor %}
</ul>
