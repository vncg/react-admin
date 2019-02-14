.PHONY: build help

help:
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: package.json ## install dependencies
	@yarn

run: run-simple

run-simple: ## run the simple example
	@yarn -s run-simple

run-tutorial: ## run the tutorial example
	@yarn -s run-tutorial

run-demo: ## run the demo example
	@yarn -s run-demo

build-demo: ## compile the demo example to static js
	@yarn -s build-demo

run-graphql-demo: ## run the demo example
	@yarn -s run-graphql-demo

build-vn-kooch-core:
	@echo "Transpiling vn-kooch-core files...";
	@cd ./packages/vn-kooch-core && yarn -s build

build-vn-kooch-ui-materialui:
	@echo "Transpiling vn-kooch-ui-materialui files...";
	@cd ./packages/vn-kooch-ui-materialui && yarn -s build

build-vn-kooch-react-admin:
	@echo "Transpiling vn-kooch-react-admin files...";
	@rm -rf ./packages/vn-kooch-react-admin/docs
	@cd ./packages/vn-kooch-react-admin && yarn -s build
	@mkdir packages/vn-kooch-react-admin/docs
	@cp docs/*.md packages/vn-kooch-react-admin/docs

build-vn-kooch-data-fakerest:
	@echo "Transpiling vn-kooch-data-fakerest files...";
	@cd ./packages/vn-kooch-data-fakerest && yarn -s build

build-vn-kooch-data-json-server:
	@echo "Transpiling vn-kooch-data-json-server files...";
	@cd ./packages/vn-kooch-data-json-server && yarn -s build

build-vn-kooch-data-simple-rest:
	@echo "Transpiling vn-kooch-data-simple-rest files...";
	@cd ./packages/vn-kooch-data-simple-rest && yarn -s build

build-vn-kooch-data-graphql:
	@echo "Transpiling vn-kooch-data-graphql files...";
	@cd ./packages/vn-kooch-data-graphql && yarn -s build

build-vn-kooch-data-graphcool:
	@echo "Transpiling vn-kooch-data-graphcool files...";
	@cd ./packages/vn-kooch-data-graphcool && yarn -s build

build-vn-kooch-data-graphql-simple:
	@echo "Transpiling vn-kooch-data-graphql-simple files...";
	@cd ./packages/vn-kooch-data-graphql-simple && yarn -s build

build-vn-kooch-input-rich-text:
	@echo "Transpiling vn-kooch-input-rich-text files...";
	@cd ./packages/vn-kooch-input-rich-text && yarn -s build

build-vn-kooch-realtime:
	@echo "Transpiling vn-kooch-realtime files...";
	@cd ./packages/vn-kooch-realtime && yarn -s build

build-vn-kooch-tree-core:
	@echo "Transpiling vn-kooch-tree-core files...";
	@cd ./packages/vn-kooch-tree-core && yarn -s build

build-vn-kooch-tree-ui-materialui:
	@echo "Transpiling vn-kooch-tree-ui-materialui files...";
	@cd ./packages/vn-kooch-tree-ui-materialui && yarn -s build

build-data-generator:
	@echo "Transpiling data-generator files...";
	@cd ./examples/data-generator && yarn -s build

build: build-vn-kooch-core build-vn-kooch-ui-materialui build-vn-kooch-react-admin build-vn-kooch-data-fakerest build-vn-kooch-data-json-server build-vn-kooch-data-simple-rest build-vn-kooch-data-graphql build-vn-kooch-data-graphcool build-vn-kooch-data-graphql-simple build-vn-kooch-input-rich-text build-vn-kooch-realtime build-vn-kooch-tree-core build-vn-kooch-tree-ui-materialui build-data-generator ## compile ES6 files to JS

doc: ## compile doc as html and launch doc web server
	@yarn -s doc

serve-github-pages: ## Serve the doc from a Github Pages docker container
	@docker run -it --rm \
		-p 4000:4000 \
		-v "${PWD}/docs:/usr/src/app" \
		starefossen/github-pages:onbuild \
		jekyll serve \
			--host=0.0.0.0 \
			--incremental

lint: ## lint the code and check coding conventions
	@echo "Running linter..."
	@yarn -s tslint 'packages/*/src/**/*.*s'

prettier: ## prettify the source code using prettier
	@echo "Running prettier..."
	@yarn -s prettier

test: build test-unit lint test-e2e ## launch all tests

test-unit: ## launch unit tests
	@if [ "$(CI)" != "true" ]; then \
		echo "Running unit tests..."; \
		yarn -s test-unit; \
	fi
	@if [ "$(CI)" = "true" ]; then \
		echo "Running unit tests in CI..."; \
		yarn -s test-unit-ci; \
	fi

test-unit-watch: ## launch unit tests and watch for changes
	yarn -s test-unit --watch

test-e2e: ## launch end-to-end tests
	@if [ "$(build)" != "false" ]; then \
		echo 'Building example code (call "make build=false test-e2e" to skip the build)...'; \
		cd examples/simple && BABEL_ENV=cjs yarn -s build; \
	fi

	@NODE_ENV=test cd cypress && yarn -s test


test-e2e-local: ## launch end-to-end tests for development
	@echo 'Starting e2e tests environment. Ensure you started the simple example first (make run-simple)'
	@cd cypress && yarn -s start
