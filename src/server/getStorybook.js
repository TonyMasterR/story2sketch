export default async (browser, iframeUrl) => {
  const page = await browser.newPage();

  await page.goto(iframeUrl, {
    waitUntil: "networkidle2"
  });

  return page.evaluate("(typeof preview !== 'undefined') ? preview.getStorybook() : __STORYBOOK_CLIENT_API__.getStorybook()");
};
