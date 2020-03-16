clean-data:
	@rm -rf data/*.json dist/locales/* src/locales/*

clean-dist:
	@rm -rf dist/*

eslint:
	npx eslint ./packages/*/src/**/*.js

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

build-data:
	@npm run build-ccy
	@npm run build-l10n

build-module:

clean: clean-data clean-dist

data: clean-data build-data

.PHONY: clean build-data build
