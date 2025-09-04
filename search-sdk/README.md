# DocStar Search SDK

A lightweight standalone JavaScript search component that can be embedded in any web application without React or other framework dependencies.

## Features

- 🚀 **Zero Dependencies** - Pure vanilla JavaScript, no React or other frameworks required
- 🎨 **Themeable** - Built-in light and dark themes with customization options
- ⚡ **Fast & Lightweight** - Minified version is only ~9.6KB
- 🔍 **Smart Search** - Debounced input with configurable minimum query length
- ⌨️ **Keyboard Navigation** - Full keyboard support with arrow keys and Enter
- 🎯 **Event-Driven** - Custom events for search selections and interactions
- 📱 **Responsive** - Works on desktop and mobile devices
- 🔧 **Configurable** - Extensive configuration options for customization

## Quick Start

### Option 1: Use via CDN (Recommended)

```html
<!-- Include from CDN -->
<script src="https://cdn.jsdelivr.net/gh/swayammaheshwari/docstar-sdk@latest/search-sdk/dist/docstar-search.min.js"></script>

<!-- Create a container -->
<div id="my-search"></div>

<!-- Initialize -->
<script>
SimpleSearch.create({
    containerId: 'my-search',
    placeholder: 'Search...'
});
</script>
```

### Option 2: Download and Host Locally

1. Download the script from [GitHub Releases](https://github.com/swayammaheshwari/docstar-sdk/releases)
2. Include it in your HTML:

```html
<script src="path/to/docstar-search.min.js"></script>
<div id="my-search"></div>
<script>
SimpleSearch.create({
    containerId: 'my-search'
});
</script>
```

## CDN Links

### Production (Minified)
```
https://cdn.jsdelivr.net/gh/swayammaheshwari/docstar-sdk@latest/search-sdk/dist/docstar-search.min.js
```

### Development (Unminified)
```
https://cdn.jsdelivr.net/gh/swayammaheshwari/docstar-sdk@latest/search-sdk/dist/docstar-search.js
```

### Specific Version
```
https://cdn.jsdelivr.net/gh/swayammaheshwari/docstar-sdk@v2.0.0/search-sdk/dist/docstar-search.min.js
```

## Auto-initialization with Data Attributes

Add data attributes to automatically initialize the search component:

```html
<div 
    id="search-container" 
    data-simple-search
    data-placeholder="Search documentation...">
</div>
```

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `containerId` | string | `'docstar-search'` | ID of the container element |
| `placeholder` | string | `'Search...'` | Input placeholder text |
| `apiEndpoint` | string | `null` | API endpoint for search requests |
| `theme` | string | `'light'` | Theme: `'light'` or `'dark'` |
| `width` | string | `'100%'` | Component width |
| `maxHeight` | string | `'400px'` | Maximum height of results dropdown |
| `debounceDelay` | number | `300` | Debounce delay in milliseconds |
| `minQueryLength` | number | `2` | Minimum characters before search |
| `maxResults` | number | `10` | Maximum number of results to display |

## API Methods

### Creating an Instance

```javascript
const search = DocStarSearch.create({
    containerId: 'my-search',
    placeholder: 'Search...',
    theme: 'light'
});
```

### Instance Methods

```javascript
// Update configuration
search.updateConfig({ theme: 'dark' });

// Focus the input
search.focus();

// Clear the search
search.clear();

// Destroy the instance
search.destroy();
```

## Event Handling

Listen for search selection events:

```javascript
document.getElementById('my-search').addEventListener('docstar-search-select', function(e) {
    console.log('Selected result:', e.detail.result);
    console.log('Search query:', e.detail.query);
    console.log('Result index:', e.detail.index);
});
```

## API Integration

### Using a Custom API Endpoint

```javascript
DocStarSearch.create({
    containerId: 'my-search',
    apiEndpoint: 'https://api.example.com/search'
});
```

The SDK will make GET requests to your endpoint with the query parameter `q`:
```
GET https://api.example.com/search?q=search+term
```

### Expected API Response Format

Your API should return JSON in one of these formats:

```javascript
// Option 1: Array of results
[
    {
        "title": "Result Title",
        "description": "Result description"
    }
]

// Option 2: Object with results array
{
    "results": [
        {
            "title": "Result Title", 
            "description": "Result description"
        }
    ]
}
```

## Styling and Themes

### Built-in Themes

The SDK includes two built-in themes:

- **Light Theme** (default)
- **Dark Theme**

```javascript
// Light theme
DocStarSearch.create({
    containerId: 'search',
    theme: 'light'
});

// Dark theme
DocStarSearch.create({
    containerId: 'search',
    theme: 'dark'
});
```

### Custom Styling

You can override the default styles by targeting the CSS classes:

```css
.docstar-search-container {
    /* Container styles */
}

.docstar-search-input {
    /* Input field styles */
}

.docstar-search-results {
    /* Results dropdown styles */
}

.docstar-search-result-item {
    /* Individual result item styles */
}
```

## Examples

### Basic Search

```html
<div id="basic-search"></div>
<script>
    DocStarSearch.create({
        containerId: 'basic-search'
    });
</script>
```

### Advanced Configuration

```html
<div id="advanced-search"></div>
<script>
    const search = DocStarSearch.create({
        containerId: 'advanced-search',
        placeholder: 'Search documentation...',
        apiEndpoint: '/api/search',
        theme: 'dark',
        maxResults: 8,
        debounceDelay: 200,
        minQueryLength: 3
    });

    // Handle search selections
    document.getElementById('advanced-search')
        .addEventListener('docstar-search-select', function(e) {
            window.location.href = e.detail.result.url;
        });
</script>
```

### Multiple Search Instances

```html
<div id="search-1"></div>
<div id="search-2"></div>

<script>
    // Create multiple independent search instances
    const search1 = DocStarSearch.create({
        containerId: 'search-1',
        placeholder: 'Search products...',
        apiEndpoint: '/api/products/search'
    });

    const search2 = DocStarSearch.create({
        containerId: 'search-2',
        placeholder: 'Search articles...',
        apiEndpoint: '/api/articles/search',
        theme: 'dark'
    });
</script>
```

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Development

### Building from Source

```bash
# Build the distribution files
npm run build

# Start development server
npm run dev
```

### File Structure

```
search-sdk/
├── src/
│   └── docstar-search.js    # Source code
├── dist/
│   ├── docstar-search.js    # Development version
│   └── docstar-search.min.js # Minified version
├── example.html             # Usage examples
├── build.js                 # Build script
└── README.md               # This file
```

## License

MIT License - see LICENSE file for details.

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request
