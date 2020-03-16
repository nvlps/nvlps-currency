clean-data:
	@rm ./packages/nvlps-currency-core/src/lib/ccy-data.js
	@rm ./packages/nvlps-currency-core/src/lib/posix.js
	@rm ./packages/nvlps-currency-l10n/src/index.js
	@rm ./packages/nvlps-currency-l10n/src/locales/*.js

clean-dist:
	@rm -rf dist/*

eslint:
	npx eslint ./packages/*/src/**/*.js
	npx prettier --check ./packages/*/src/**/*.js

pylint:
	flake8 ./scripts

lint: eslint pylint

gen-ccy:
	pipenv run python scripts/gen_ccy_data.py ./packages/nvlps-currency-core/src/lib/ccy-data.js
	npx prettier --write ./packages/nvlps-currency-core/src/lib/ccy-data.js

gen-l10n:
	pipenv run python scripts/gen_ccy_l10n.py \
		--posix ./packages/nvlps-currency-core/src/lib/posix.js \
		--index ./packages/nvlps-currency-l10n/src/index.js \
		./packages/nvlps-currency-l10n/src/locales
	npx prettier --write ./packages/nvlps-currency-core/src/lib/posix.js
	npx prettier --write ./packages/nvlps-currency-l10n/src/index.js
	npx prettier --write ./packages/nvlps-currency-l10n/src/locales/*.js

data: clean-data gen-ccy gen-l10n

build-core:
	cd packages/nvlps-currency-core && npm run build

build-l10n:
	cd packages/nvlps-currency-l10n && npm run build

test-core:
	cd packages/nvlps-currency-core && npm run test

test-l10n:
	cd packages/nvlps-currency-l10n && npm run test

build: build-core build-l10n

test: test-core test-l10n

dist: build-core build-l10n

clean: clean-data clean-dist

.PHONY: dist build test
