all: install

pre-install:
	@true

install: install-root install-packages

install-root:
	@yarn --silent install

install-packages:
	@yarn --silent lerna --loglevel warn --no-progress bootstrap

test:
	@yarn --silent test --runInBand --coverage

test-local:
	@yarn --silent test --coverage

package-test:
	@cd ./$(p) && yarn --silent test --coverage --detectOpenHandles

package-clear-test:
	@cd ./$(p) && yarn --silent jest --clearCache

clean: clean-modules clean-coverage

clean-modules:
	@rm -rf node_modules/
	@find ./ -name node_modules -type d -exec rm -rf {} +

clean-coverage:
	@rm -rf coverage/
	@find ./ -name coverage -type d -exec rm -rf {} +

.PHONY: all pre-install install install-root install-packages test clean-modules clean-coverage clean package-build package-test
