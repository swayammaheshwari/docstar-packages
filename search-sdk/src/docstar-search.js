/**
 * Simple DocStar Search - Minimal Input with Console Logging
 * A lightweight search input that logs user queries to console on Enter
 */

(function(global) {
    'use strict';

    // Simple CSS styles
    const CSS_STYLES = `
        .simple-search-container {
            position: relative;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            box-sizing: border-box;
        }
        
        .simple-search-input {
            width: 100%;
            padding: 12px 16px;
            border: 2px solid #e1e5e9;
            border-radius: 8px;
            font-size: 16px;
            outline: none;
            transition: border-color 0.2s ease;
        }
        
        .simple-search-input:focus {
            border-color: #0066cc;
            box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
        }
    `;

    // Simple Search class
    class SimpleSearch {
        constructor(config = {}) {
            this.containerId = config.containerId || 'simple-search';
            this.placeholder = config.placeholder || 'Search...';
            this.container = null;
            this.input = null;
            
            this.init();
        }

        init() {
            this.injectStyles();
            this.createContainer();
            this.bindEvents();
        }

        injectStyles() {
            if (!document.getElementById('simple-search-styles')) {
                const styleElement = document.createElement('style');
                styleElement.id = 'simple-search-styles';
                styleElement.textContent = CSS_STYLES;
                document.head.appendChild(styleElement);
            }
        }

        createContainer() {
            const targetElement = document.getElementById(this.containerId);
            if (!targetElement) {
                console.error(`Simple Search: Container with ID "${this.containerId}" not found`);
                return;
            }

            // Create main container
            this.container = document.createElement('div');
            this.container.className = 'simple-search-container';

            // Create input
            this.input = document.createElement('input');
            this.input.type = 'text';
            this.input.className = 'simple-search-input';
            this.input.placeholder = this.placeholder;
            this.input.autocomplete = 'off';

            // Append elements
            this.container.appendChild(this.input);
            targetElement.appendChild(this.container);
        }

        bindEvents() {
            if (!this.input) return;

            // Enter key event
            this.input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    const query = this.input.value.trim();
                    if (query) {
                        console.log('User search query:', query);
                    }
                }
            });
        }

        // Public methods
        focus() {
            if (this.input) {
                this.input.focus();
            }
        }

        clear() {
            if (this.input) {
                this.input.value = '';
            }
        }

        getValue() {
            return this.input ? this.input.value : '';
        }

        destroy() {
            if (this.container && this.container.parentNode) {
                this.container.parentNode.removeChild(this.container);
            }
        }
    }

    // Global API
    global.SimpleSearch = {
        create: function(config) {
            return new SimpleSearch(config);
        },
        version: '1.0.0'
    };

    // Auto-initialize if data attributes are found
    document.addEventListener('DOMContentLoaded', function() {
        const autoInitElements = document.querySelectorAll('[data-simple-search]');
        autoInitElements.forEach(element => {
            const config = {
                containerId: element.id,
                placeholder: element.dataset.placeholder || 'Search...'
            };
            new SimpleSearch(config);
        });
    });

})(typeof window !== 'undefined' ? window : this);
