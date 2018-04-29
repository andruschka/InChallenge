deploy:
	@echo '🤖  Deploying this stuff! ';
	npm run bundle
	aws s3 cp dist/ s3://app.droove.me --recursive
	@echo '🕶  Deployed files! Deal with it...';
