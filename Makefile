clean-data:
	@rm -rf data/*.json dist/locales/* src/locales/*

clean-dist:
	@rm -rf dist/*

build-data:
	@npm run build-ccy
	@npm run build-l10n

build-module:

clean: clean-data clean-dist

data: clean-data build-data

.PHONY: clean build-data build
