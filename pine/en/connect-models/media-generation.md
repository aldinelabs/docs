---
title: "Image and video generation, and automatic approval (OpenRouter)"
description: "Set up OpenRouter to enable image generation, video generation, and the automatic-approval screening model."
order: 3
---

# Image and video generation, and automatic approval (OpenRouter)

Pine's features below all call models through **OpenRouter**:

- **Image generation**
- **Video generation**
- The **Decisions screening model** used by automatic approval

Without an OpenRouter key, the video generation model and the Decisions screening model show *OpenRouter is not configured yet* in settings. If you only chat and work with files, you can skip this page.

Image generation has another option: if you subscribe to ChatGPT, you can make pictures with **GPT Image** on your plan, no OpenRouter needed. See [Generate images with your ChatGPT plan](#generate-images-with-your-chatgpt-plan).

OpenRouter is a unified model-access platform: one account and one key give you models from many vendors, billed by usage with no subscription.

## Sign up for OpenRouter

**Step 1: Open the sign-up window**

- Go to [openrouter.ai](https://openrouter.ai) and click **Sign Up** at the top right (①).
- Choose how to sign up: a GitHub or Google account, or just an email.
- With email: enter your email (②), set a password (③), tick the agreement to the terms (④), and click **Continue** (⑤). Your name is optional.

![OpenRouter sign-up window](../../images/getting-started/openrouter-sign-up-modal.webp)

If you already have an account, click **Sign in** at the bottom of the window to sign in directly:

![OpenRouter sign-in window](../../images/getting-started/openrouter-sign-in-modal.webp)

**Step 2: Verify your email**

- After signing up with email, OpenRouter sends you an email.
- Open it and click the sign-up link to verify.
- The link is **valid for only 10 minutes**; if it expires, go back to the sign-up page and start again.

![OpenRouter email verification notice](../../images/getting-started/openrouter-verify-email.webp)

**Step 3: Finish the welcome onboarding**

- After verification you go through a 5-step onboarding. Handle it like this:

1. Choose how you'll use it: for personal use pick **Individual** (①), then click **Next** (②).

   ![Onboarding step 1: choose how you'll use it](../../images/getting-started/openrouter-onboarding-1.webp)

2. The onboarding creates your first API key automatically, and **the full key is shown only once, on this page**. Click the copy icon (②) to save it, then click **Continue** (③). If you don't copy it here, you can create a new one on the Keys page later (see below).

   ![Onboarding step 2: key generated and shown once](../../images/getting-started/openrouter-onboarding-2.webp)

3. The page for adding a payment method. **You don't need to fill it in now**: click **I'll do this later** (①).

   ![Onboarding step 3: add a payment method later](../../images/getting-started/openrouter-onboarding-3.webp)

4. The "Where did you first hear about OpenRouter?" survey. Click **Skip** (①).

   ![Onboarding step 4: skip the survey](../../images/getting-started/openrouter-onboarding-4.webp)

5. **You're all set!** means you're done. Click **Go to Dashboard** (①) to open the console.

   ![Onboarding step 5: done](../../images/getting-started/openrouter-onboarding-5.webp)

> [!NOTE]
> The key the onboarding creates has a $100 credit limit and a one-year expiry, which are OpenRouter's protective defaults. With a $0 balance, paid models can't be used, so the next step is to add credits.

## Get an API key

If you didn't save the key during onboarding, or want to create another, go to [openrouter.ai/settings/keys](https://openrouter.ai/settings/keys) and click **New key** at the top right (①):

![OpenRouter API keys page](../../images/getting-started/openrouter-keys.webp)

In the **Create API Key** dialog:

- Enter a name (①) such as `Pine`.
- Choose a validity period under **Expiration** (②).
- Choose an upper limit under **Credit limit** (③).
- Click **Create** (④).

The full key is again **shown only once** after creation, so copy it right away.

![Create API Key dialog](../../images/getting-started/openrouter-create-key.webp)

> [!WARNING]
> An API key works like a payment credential for your account. Don't screenshot it, send it to anyone, or commit it to a code repository. Setting a credit limit keeps the damage bounded if it ever leaks.

## Add credits

- Open [openrouter.ai/settings/credits](https://openrouter.ai/settings/credits) and click **Add credits** (①), then follow the page to pay.
- A new account's balance is **$0.00**; you can start with a small top-up to try it out.
- **Auto Top-Up** refills automatically, needs a payment method on file, and isn't required.

![OpenRouter Credits page](../../images/getting-started/openrouter-credits.webp)

> [!NOTE]
> Adding credits requires a billing name, country/region, and address, and a payment method such as a bank card. Please complete this part yourself on the OpenRouter website. Fees, accepted payment methods, and refund rules are as stated on OpenRouter's website.

## Connect OpenRouter in Pine

**Step 1: Look at the current state**

- Click the gear **Open Pine settings** at the top right of Pine, then click **Models** on the left (①).
- **Image generation model** (②) and **Video generation model** (③) below say no provider is set up yet. In current versions, the image generation model reads *Add an OpenRouter API key or sign in to OpenAI Codex under “Manage providers and models” to start making images.*, and the video generation model reads *OpenRouter is not configured yet*:

![Models settings page: OpenRouter not configured yet](../../images/getting-started/pine-or-01-models.webp)

**Step 2: Add the provider**

- Close settings, then click **Choose model** at the bottom right of the input box → **Browse all models…** → **Manage providers and models**.
- Type `openrouter` in the search box (①) and click **OpenRouter** when it appears (②):

![Searching for OpenRouter](../../images/getting-started/pine-or-02-search.webp)

**Step 3: Choose an authentication method**

- The **Connect OpenRouter** dialog offers two methods: **OpenRouter API key** (①) and **Sign in with OpenRouter**.
- This guide uses the API key; select it and click **Continue** (②):

![Choosing OpenRouter API key](../../images/getting-started/pine-or-03-method.webp)

**Step 4: Paste the key**

- In **Enter OpenRouter API key**, paste the key you copied (①) and click **Continue** (②):

![Pasting the OpenRouter API key](../../images/getting-started/pine-or-04-key.webp)

Once connected:

- Go back to **Pine Settings → Models** and click **Choose model** next to **Image generation model** / **Video generation model** to pick image and video models on OpenRouter.
- After that, just ask the AI to generate an image in a session.

- Image and video generation are billed per use, and prices vary by model. Check the unit price on OpenRouter's model page before choosing.
- To change the key, go back to **Manage providers and models** and repeat steps 3 and 4 above for OpenRouter.

## Generate images with your ChatGPT plan

If you already have a paid ChatGPT plan (Plus, Pro and so on), Pine can make pictures with **GPT Image** on that plan, with no OpenRouter balance needed. You choose this source yourself; Pine never switches to it automatically.

**Step 1: Sign in to OpenAI Codex**

- Click **Choose model** at the bottom right of the input box → **Browse all models…** → **Manage providers and models**.
- Search for `codex`, pick **OpenAI Codex**, and sign in with your ChatGPT account when prompted.

**Step 2: Pick GPT Image**

- Open **Pine Settings → Models** and click **Choose model** next to **Image generation model**.
- Under the **ChatGPT** group, pick **GPT Image**. Its row reads *Newest model on your ChatGPT plan · uses Codex usage*.
- Until you sign in to OpenAI Codex, the row is greyed out with *Sign in to OpenAI Codex to use it*; after step 1 you can pick it.

After that, just ask the AI to generate an image in a session. The approval card notes that the picture runs on your ChatGPT subscription.

A few notes:

- **Usage**: pictures draw on your plan's Codex usage instead of an OpenRouter balance. If the usage runs out, Pine tells you, and you can wait for it to refill or switch back to an OpenRouter image model.
- **Model**: ChatGPT always uses its newest image model, so there's no version to pick; the result names the model it used.
- **Route**: this source uses ChatGPT's own route rather than a public API, so a later update may adjust it.
- **Plans**: the ChatGPT Free plan can't use this source; you need a paid plan.
