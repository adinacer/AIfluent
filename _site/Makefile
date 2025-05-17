.PHONY: install dev build preview clean lint format check fix

# Default target
.DEFAULT_GOAL := help

# Variables
NODE_ENV ?= development

# Help command
help:
	@echo "Available commands:"
	@echo "  make install    - Install dependencies"
	@echo "  make dev        - Start development server"
	@echo "  make build      - Build for production"
	@echo "  make preview    - Preview production build"
	@echo "  make clean      - Clean build artifacts"
	@echo "  make lint       - Run linter"
	@echo "  make format     - Format code"
	@echo "  make check      - Run type checking"
	@echo "  make fix        - Install dependencies and fix issues"

# Install dependencies
install:
	@echo "Installing dependencies..."
	npm install

# Start development server
dev:
	@echo "Starting development server..."
	npm run dev

# Build for production
build:
	@echo "Building for production..."
	npm run build

# Preview production build
preview:
	@echo "Previewing production build..."
	npm run preview

# Clean build artifacts
clean:
	@echo "Cleaning build artifacts..."
	rm -rf dist
	rm -rf .astro

# Run linter
lint:
	@echo "Running linter..."
	npm run astro check

# Format code
format:
	@echo "Formatting code..."
	npm run format

# Run type checking
check:
	@echo "Running type checking..."
	npm run astro check

# Fix issues
fix:
	@echo "Installing dependencies and fixing issues..."
	make clean
	make install
	make format
	make check 