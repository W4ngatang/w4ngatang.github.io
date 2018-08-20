---
layout: page
title: Alex Wang
---

I am a PhD student at New York University studying computer science, focusing on machine learning for natural language.
I am jointly advised by Professors [Sam Bowman](https://www.nyu.edu/projects/bowman/) and [Kyunghyun Cho](http://www.kyunghyuncho.me/), and am part of the [Machine Learning for Language](https://wp.nyu.edu/ml2/) group at NYU.
I graduated from Harvard University with a bachelor's in applied mathematics and a master's in computer science, where I was advised by [Alexander Rush](http://nlp.seas.harvard.edu/rush.html) and spent time with the [Harvard Natural Language Processing](http://nlp.seas.harvard.edu/) group.
See my [CV](/static/CV-08-18-2018.pdf), [Google Scholar](https://scholar.google.com/citations?view_op=list_works&hl=en&user=7lSuRloAAAAJ), [GitHub](https://github.com/W4ngatang) for more details.

### Publications

**GLUE: A Multi-Task Benchmark and Analysis Platform for Natural Language Understanding** <br/>
Alex Wang, Amanpreet Singh, Julian Michael, Felix Hill, Omer Levy, Samuel R. Bowman. <br/>
arXiV preprint. <br/>
\[[paper](https://arxiv.org/abs/1804.07461)\] \[[site](https://gluebenchmark.com/)\]

**Learning Linguistic Descriptors of User Roles in Online Communities** <br/>
Alex Wang, William L. Hamilton, Jure Leskovec.  <br/>
NLP+CSS Workshop. <br/>
\[[paper](https://arxiv.org/abs/1804.07461)\]

### Other Projects

- [A Neural Framework for One-Shot Learning](https://github.com/W4ngatang/MatchingNets): thorough examination in the use of [matching networks](https://arxiv.org/abs/1606.04080), a neural network and nonparametric model hybrid, for one-shot learning in various settings. See [paper](/static/thesis.pdf) for more details. Completed for my senior thesis, earning high honors.
- [Traffic Swarm Optimization](https://github.com/W4ngatang/TrafficSwarmOptimization): investigation in the use of swarm optimization methods for optimizing traffic light cycles. For more info see this [article](https://www.seas.harvard.edu/news/2016/06/ants-go-marching-on-to-optimize-traffic-lights) or this [writeup](/static/swarm-optimization-traffic.pdf).
- [Gaussian Processes for Crime Prediction](https://github.com/kandluis/crime-prediction): an exploration into the use of Gaussian processes to predict future crime rates in cities. See the [writeup](/static/gaussian-processes-crime.pdf) for details.
- [Twitter Plays Chess](https://github.com/mgentili/TwitterPlaysChess): crowdsourced chess playing against an AI where users vote for the human team's next move via Twitter, &agrave; la Twitch Plays Pokemon.

### Miscellaneous

- [O Brother What Art Thou](https://vimeo.com/206087559)
- [Watching the Watchman](http://harvardpolitics.com/united-states/watching-watchman/)

<div class="posts-list">
  {% for post in paginator.posts %}
  <article class="post-preview">
    <a href="{{ post.url | prepend: site.baseurl }}">
	  <h2 class="post-title">{{ post.title }}</h2>

	  {% if post.subtitle %}
	  <h3 class="post-subtitle">
	    {{ post.subtitle }}
	  </h3>
	  {% endif %}
    </a>

    <p class="post-meta">
      Posted on {{ post.date | date: "%B %-d, %Y" }}
    </p>

    <div class="post-entry-container">
      {% if post.image %}
      <div class="post-image">
        <a href="{{ post.url | prepend: site.baseurl }}">
          <img src="{{ post.image }}">
        </a>
      </div>
      {% endif %}
      <div class="post-entry">
        {{ post.excerpt | strip_html | xml_escape | truncatewords: site.excerpt_length }}
        {% assign excerpt_word_count = post.excerpt | number_of_words %}
        {% if post.content != post.excerpt or excerpt_word_count > site.excerpt_length %}
          <a href="{{ post.url | prepend: site.baseurl }}" class="post-read-more">[Read&nbsp;More]</a>
        {% endif %}
      </div>
    </div>

    {% if post.tags.size > 0 %}
    <div class="blog-tags">
      Tags:
      {% if site.link-tags %}
      {% for tag in post.tags %}
      <a href="{{ site.baseurl }}/tags#{{- tag -}}">{{- tag -}}</a>
      {% endfor %}
      {% else %}
        {{ post.tags | join: ", " }}
      {% endif %}
    </div>
    {% endif %}

   </article>
  {% endfor %}
</div>

{% if paginator.total_pages > 1 %}
<ul class="pager main-pager">
  {% if paginator.previous_page %}
  <li class="previous">
    <a href="{{ paginator.previous_page_path | prepend: site.baseurl | replace: '//', '/' }}">&larr; Newer Posts</a>
  </li>
  {% endif %}
  {% if paginator.next_page %}
  <li class="next">
    <a href="{{ paginator.next_page_path | prepend: site.baseurl | replace: '//', '/' }}">Older Posts &rarr;</a>
  </li>
  {% endif %}
</ul>
{% endif %}
