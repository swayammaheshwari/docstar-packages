# DocStar Search SDK - Browser Script

A lightweight JavaScript search component for direct browser usage via CDN.

## CDN Usage

### GitHub Pages
```html
<script src="https://swayammaheshwari.github.io/docstar-sdk/scripts/search-sdk.min.js"></script>
```

### jsDelivr CDN
```html
<script src="https://cdn.jsdelivr.net/gh/swayammaheshwari/docstar-sdk@main/scripts/search-sdk.min.js"></script>
```

## Usage

```html
<!DOCTYPE html>
<html>
<head>
    <title>Search Demo</title>
</head>
<body>
    <div id="my-search"></div>
    
    <script src="https://cdn.jsdelivr.net/gh/swayammaheshwari/docstar-sdk@main/scripts/search-sdk.min.js"></script>
    <script>
        SimpleSearch.create({
            containerId: 'my-search',
            placeholder: 'Type and press Enter...'
        });
    </script>
</body>
</html>
```

## Features

- ✅ Zero dependencies
- ✅ Lightweight (~3KB minified)
- ✅ Console logging on Enter key
- ✅ Auto-styling included
- ✅ CDN ready

## API

### SimpleSearch.create(config)
- `containerId`: Target element ID
- `placeholder`: Input placeholder text

### Methods
- `focus()`: Focus the input
- `clear()`: Clear the input
- `getValue()`: Get current value
- `destroy()`: Remove component
