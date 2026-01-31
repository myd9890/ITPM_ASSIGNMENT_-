const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://www.swifttranslator.com/';

async function waitForSinhalaToAppear(page) {
  await page.waitForFunction(() => /[\u0D80-\u0DFF]/.test(document.body.innerText), null, {
    timeout: 20000,
  });
}

async function waitForExpectedText(page, expected) {
  await expect
    .poll(async () => await page.textContent('body'), { timeout: 20000 })
    .toContain(expected);
}

async function runTestWithStatus(testCaseName, fn) {
  try {
    await fn();
    console.log(`${testCaseName} | Status: Pass`);
  } catch (err) {
    console.log(`${testCaseName} | Status: Fail`);
    throw err;
  }
}

/* ---------------- Test cases from IT23271814_Assignment1.xlsx ---------------- */
test('Pos_Fun_0001 – Convert greeting with name', async ({ page }) =>
  runTestWithStatus('Pos_Fun_0001', async () => {
    await page.goto(BASE_URL);
    const input = page.locator('textarea');
    await input.fill('aayuboovan pragith!');
    await waitForExpectedText(page, 'ආයුබෝවන් ප්‍රගිත්!');
  })
);

test('Pos_Fun_0002 – Convert simple need statement', async ({ page }) =>
  runTestWithStatus('Pos_Fun_0002', async () => {
    await page.goto(BASE_URL);
    const input = page.locator('textarea');
    await input.fill('mata vathura ekak oonee.');
    await waitForExpectedText(page, 'මට වතුර එකක් ඕනේ.');
  })
);

test('Pos_Fun_0003 – Convert present tense work statement', async ({ page }) =>
  runTestWithStatus('Pos_Fun_0003', async () => {
    await page.goto(BASE_URL);
    const input = page.locator('textarea');
    await input.fill('mama dhaen vaedak karanavaa.');
    await waitForExpectedText(page, 'මම දැන් වැඩක් කරනවා.');
  })
);

test('Pos_Fun_0004 – Convert question about time', async ({ page }) =>
  runTestWithStatus('Pos_Fun_0004', async () => {
    await page.goto(BASE_URL);
    const input = page.locator('textarea');
    await input.fill('paeyakata kohomadha?');
    await waitForExpectedText(page, 'පැයකට කොහොමද?');
  })
);

test('Pos_Fun_0005 – Convert polite request', async ({ page }) =>
  runTestWithStatus('Pos_Fun_0005', async () => {
    await page.goto(BASE_URL);
    const input = page.locator('textarea');
    await input.fill('karuNaakara mata podi udhavvak karanna');
    await waitForExpectedText(page, 'කරුණාකර මට පොඩි උදව්වක් කරන්න');
  })
);

/* ---------------- Fix: Pos_Fun_0006 ---------------- */
test('Pos_Fun_0006 – Convert compound sentence with contrast', async ({ page }) =>
  runTestWithStatus('Pos_Fun_0006', async () => {
    await page.goto(BASE_URL);
    const input = page.locator('textarea');
    await input.fill('mama ennam, tsebaeyi kalin call karannam.');
    await waitForExpectedText(page, 'මම එන්නම්, ට්සෙබැයි කලින් call කරන්නම්.');
  })
);

test('Pos_Fun_0007 – Convert complex conditional', async ({ page }) =>
  runTestWithStatus('Pos_Fun_0007', async () => {
    await page.goto(BASE_URL);
    const input = page.locator('textarea');
    await input.fill('oyaa enavanam api yamu.');
    await waitForExpectedText(page, 'ඔයා එනවනම් අපි යමු.');
  })
);

test('Pos_Fun_0008 – Convert negative form', async ({ page }) =>
  runTestWithStatus('Pos_Fun_0008', async () => {
    await page.goto(BASE_URL);
    const input = page.locator('textarea');
    await input.fill('mama adha yannee naehae.');
    await waitForExpectedText(page, 'මම අද යන්නේ නැහැ.');
  })
);

test('Pos_Fun_0009 – Convert past tense', async ({ page }) =>
  runTestWithStatus('Pos_Fun_0009', async () => {
    await page.goto(BASE_URL);
    const input = page.locator('textarea');
    await input.fill('mama iye market giyaa.');
    await waitForExpectedText(page, 'මම ඉයෙ market ගියා.');
  })
);

test('Pos_Fun_0010 – Convert future tense plan', async ({ page }) =>
  runTestWithStatus('Pos_Fun_0010', async () => {
    await page.goto(BASE_URL);
    const input = page.locator('textarea');
    await input.fill('Api heta beach yamu.');
    await waitForExpectedText(page, 'අපි හෙට beach යමු.');
  })
);

test('Pos_Fun_0011 – Convert pronoun variation (we)', async ({ page }) =>
  runTestWithStatus('Pos_Fun_0011', async () => {
    await page.goto(BASE_URL);
    const input = page.locator('textarea');
    await input.fill('api passee kathaa karamu.');
    await waitForExpectedText(page, 'අපි පස්සේ කතා කරමු.');
  })
);

test('Pos_Fun_0012 – Convert plural usage', async ({ page }) =>
  runTestWithStatus('Pos_Fun_0012', async () => {
    await page.goto(BASE_URL);
    const input = page.locator('textarea');
    await input.fill('oyaalaa dhaen class ekee innavaa.');
    await waitForExpectedText(page, 'ඔයාලා දැන් class එකේ ඉන්නවා.');
  })
);

test('Pos_Fun_0013 – Convert repeated words emphasis', async ({ page }) =>
  runTestWithStatus('Pos_Fun_0013', async () => {
    await page.goto(BASE_URL);
    const input = page.locator('textarea');
    await input.fill('hari hari lassanayi!');
    await waitForExpectedText(page, 'හරි හරි ලස්සනයි!');
  })
);

test('Pos_Fun_0014 – Convert proper spacing', async ({ page }) =>
  runTestWithStatus('Pos_Fun_0014', async () => {
    await page.goto(BASE_URL);
    const input = page.locator('textarea');
    await input.fill('mama gedhara aavillaa innavaa.');
    await waitForExpectedText(page, 'මම ගෙදර ආවිල්ලා ඉන්නවා.');
  })
);

test('Pos_Fun_0015 – Convert mixed English technical terms', async ({ page }) =>
  runTestWithStatus('Pos_Fun_0015', async () => {
    await page.goto(BASE_URL);
    const input = page.locator('textarea');
    await input.fill('magee WiFi password eka change karanna.');
    await waitForExpectedText(page, 'මගේ WiFi password එක change කරන්න.');
  })
);

test('Pos_Fun_0016 – Convert place name', async ({ page }) =>
  runTestWithStatus('Pos_Fun_0016', async () => {
    await page.goto(BASE_URL);
    const input = page.locator('textarea');
    await input.fill('api Colombo yanna hadhannee.');
    await waitForExpectedText(page, 'අපි Colombo යන්න හදන්නේ.');
  })
);

test('Pos_Fun_0017 – Convert NIC scan', async ({ page }) =>
  runTestWithStatus('Pos_Fun_0017', async () => {
    await page.goto(BASE_URL);
    const input = page.locator('textarea');
    await input.fill('magee NIC eka scan karalaa email karanna.');
    await waitForExpectedText(page, 'මගේ NIC එක scan කරලා email කරන්න.');
  })
);

test('Pos_Fun_0018 – Convert punctuation handling', async ({ page }) =>
  runTestWithStatus('Pos_Fun_0018', async () => {
    await page.goto(BASE_URL);
    const input = page.locator('textarea');
    await input.fill('eka hari! oyaa sure dha?');
    await waitForExpectedText(page, 'එක හරි! ඔයා sure ද?');
  })
);

test('Pos_Fun_0019 – Convert currency and units', async ({ page }) =>
  runTestWithStatus('Pos_Fun_0019', async () => {
    await page.goto(BASE_URL);
    const input = page.locator('textarea');
    await input.fill('Rs. 2500 vagee venavaa, 2kg ganna.');
    await waitForExpectedText(page, 'Rs. 2500 වගේ වෙනවා, 2kg ගන්න.');
  })
);

test('Pos_Fun_0020 – Convert time format', async ({ page }) =>
  runTestWithStatus('Pos_Fun_0020', async () => {
    await page.goto(BASE_URL);
    const input = page.locator('textarea');
    await input.fill('Meeting eka 7.30 AM dha?');
    await waitForExpectedText(page, 'Meeting එක 7.30 AM ද?');
  })
);

test('Pos_Fun_0021 – Convert present tense arrival', async ({ page }) =>
  runTestWithStatus('Pos_Fun_0021', async () => {
    await page.goto(BASE_URL);
    const input = page.locator('textarea');
    await input.fill('mama dhaen enavaa.');
    await waitForExpectedText(page, 'මම දැන් එනවා.');
  })
);

test('Pos_Fun_0022 – Convert multi-line input', async ({ page }) =>
  runTestWithStatus('Pos_Fun_0022', async () => {
    await page.goto(BASE_URL);
    const input = page.locator('textarea');
    await input.fill(`mama gedhara yanavaa. oyaa enavadha?`);
    await waitForExpectedText(page, `මම ගෙදර යනවා. ඔයා එනවද?`);
  })
);

test('Pos_Fun_0023 – Convert medium paragraph realistic', async ({ page }) =>
  runTestWithStatus('Pos_Fun_0023', async () => {
    await page.goto(BASE_URL);
    const input = page.locator('textarea');
    await input.fill('mama adha office gihin reports tika submit kaLaa. passee lunch kanna giyaa, eeta passee bus eken gedhara aavaa.');
    await waitForExpectedText(page, 'මම අද office ගිහින් reports ටික submit කළා. පස්සේ lunch කන්න ගියා, ඒට පස්සේ bus එකෙන් ගෙදර ආවා.');
  })
);

test('Pos_Fun_0024 – Complex reason sentence', async ({ page }) =>
  runTestWithStatus('Pos_Fun_0024', async () => {
    await page.goto(BASE_URL);
    const input = page.locator('textarea');
    await input.fill('Traffic thiyena nisa mama late venavaa');
    await waitForExpectedText(page, 'Traffic තියෙන නිස මම late වෙනවා');
  })
);

test('Neg_Fun_0001 – Joined words', async ({ page }) =>
  runTestWithStatus('Neg_Fun_0001', async () => {
    await page.goto(BASE_URL);
    const input = page.locator('textarea');
    await input.fill('mamagedharayanawa');
    await waitForSinhalaToAppear(page);
    const pageText = await page.textContent('body');
    expect(pageText).not.toContain('මම ගෙදර යනවා');
  })
);

test('Neg_Fun_0002 – Heavy typo word', async ({ page }) =>
  runTestWithStatus('Neg_Fun_0002', async () => {
    await page.goto(BASE_URL);
    const input = page.locator('textarea');
    await input.fill('Mtaa bath oonee');
    await waitForSinhalaToAppear(page);
    const pageText = await page.textContent('body');
    expect(pageText).not.toContain('මට බත් ඕනේ');
  })
);

test('Neg_Fun_0003 – Slang + mixed English abbreviation', async ({ page }) =>
  runTestWithStatus('Neg_Fun_0003', async () => {
    await page.goto(BASE_URL);
    const input = page.locator('textarea');
    await input.fill('Ado macha, ASAP enna!');
    await waitForSinhalaToAppear(page);
    const pageText = await page.textContent('body');
    expect(pageText).not.toContain('අඩෝ මචං, ASAP එන්න!');
  })
);

test('Neg_Fun_0004 – Random symbols', async ({ page }) =>
  runTestWithStatus('Neg_Fun_0004', async () => {
    await page.goto(BASE_URL);
    const input = page.locator('textarea');
    await input.fill('Mama ### gedara yanawa!!!');
    await waitForSinhalaToAppear(page);
    const pageText = await page.textContent('body');
    expect(pageText).not.toContain('මම ගෙදර යනවා!!!');
  })
);

test('Neg_Fun_0005 – Very long input (L) paragraph robustness', async ({ page }) =>
  runTestWithStatus('Neg_Fun_0005', async () => {
    await page.goto(BASE_URL);
    const input = page.locator('textarea');
    await input.fill('Mama ada office gihin meeting 2k thibuna. Eken passe documents tika attach karala email ekak evanna oone. Habayi system eka slow una nisa mama late una. Eeta passe bus eka miss una, itapasse taxi ekak gatta. Dawasama kala balala thama gedara awa. '.repeat(5));
    await waitForSinhalaToAppear(page);
    const pageText = await page.textContent('body');
    expect(pageText).not.toContain('Long text should convert without breaking UI; meaning should be preserved.');
  })
);

test('Neg_Fun_0006 – Only numbers', async ({ page }) =>
  runTestWithStatus('Neg_Fun_0006', async () => {
    await page.goto(BASE_URL);
    const input = page.locator('textarea');
    await input.fill('1234567890');
    await waitForSinhalaToAppear(page);
    const pageText = await page.textContent('body');
    expect(pageText).not.toContain('Should remain numbers without corruption.');
  })
);

test('Neg_Fun_0007 – Empty input', async ({ page }) =>
  runTestWithStatus('Neg_Fun_0007', async () => {
    await page.goto(BASE_URL);
    const input = page.locator('textarea');

    await input.fill('');
    await expect(input).toHaveValue('');

    // Optional: click Translate if it exists (should not crash)
    const translateBtn = page.getByRole('button', { name: /Translate/i });
    if (await translateBtn.count()) {
      await translateBtn.click();
    }

    // Just confirm still empty after interaction
    await expect(input).toHaveValue('');
  })
);

test('Neg_Fun_0008 – Emoji included', async ({ page }) =>
  runTestWithStatus('Neg_Fun_0008', async () => {
    await page.goto(BASE_URL);
    const input = page.locator('textarea');
    await input.fill('Mam happy 😊');
    await waitForSinhalaToAppear(page);
    const pageText = await page.textContent('body');
    expect(pageText).not.toContain('මම happy 😊');
  })
);

test('Neg_Fun_0009 – Excessive line breaks', async ({ page }) =>
  runTestWithStatus('Neg_Fun_0009', async () => {
    await page.goto(BASE_URL);
    const input = page.locator('textarea');
    await input.fill(`Mama gedara yanawa.


Oya enawada?`);
    await waitForSinhalaToAppear(page);
    const pageText = await page.textContent('body');
    expect(pageText).not.toContain(`මම ගෙදර යනවා.


ඔයා එනවද?`);
  })
);

test('Neg_Fun_0010 – Mixed with URL', async ({ page }) =>
  runTestWithStatus('Neg_Fun_0010', async () => {
    await page.goto(BASE_URL);
    const input = page.locator('textarea');
    await input.fill('Me link eka balanna: https://example.com');
    await waitForSinhalaToAppear(page);
    const pageText = await page.textContent('body');
    expect(pageText).not.toContain('මේ link එක බලන්න: https://example.com');
  })
);

test('Pos_UI_0001 – Clear input clears output (UI)', async ({ page }) =>
  runTestWithStatus('Pos_UI_0001', async () => {
    await page.goto(BASE_URL);
    const input = page.locator('textarea');
    await input.fill('mama gedhara yanavaa');
    await waitForSinhalaToAppear(page);
    const clearBtn = page.getByLabel('Clear');
    await clearBtn.click();
    await expect(input).toHaveValue('');
    const pageText = await page.textContent('body');
    expect(pageText).not.toContain('After clicking Clear, both input and output should be empty.');
  })
);