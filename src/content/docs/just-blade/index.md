---
title: Just-Blade
description: Laravel's Blade standalone
---

Now you can use blade templating easily in your plain php projects.

### Quick start

Install the follow package and you are good to go:-

```bash
composer require wp-theme/blade
```

### Howto use it

How to use it in your plain php projects

```php
$views = THEME_PATH . '/views';
$cache = THEME_PATH . '/storage/cache';

$blade = new \Just\Blade($views, $cache);
$blade->render($template, $data);

```

### Github Repository

- <a href="https://github.com/maratib/just-blade" target="_blank">Just-Blade</a>
