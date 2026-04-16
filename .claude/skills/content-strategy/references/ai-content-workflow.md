# AI-Assisted Content Workflow

Reference for using AI tools (Claude, GPT-4, Gemini) to scale content production while maintaining quality, brand voice, and factual accuracy. Use when a content team wants to produce more with less or when AI-assisted content is part of the product offering.

## When to Use This Reference

Use this when planning how AI fits into a content production pipeline, when helping a content team adopt AI tools responsibly, or when building a product that assists with content creation (book generation, blog writing, etc.).

---

## Core Principle: AI Accelerates, Humans Direct

AI tools are best used for:
- **Generating first drafts** from a well-structured brief
- **Expanding bullet points** into full paragraphs
- **Rephrasing** for different audiences or formats
- **Generating variations** for A/B testing
- **Research summaries** from provided sources
- **Structural suggestions** for outlines

AI tools are NOT reliable for:
- **Original insights** — they recombine what exists, not generate new ideas
- **Current facts** — knowledge cutoffs mean stale data
- **Brand voice** — without explicit examples, output sounds generic
- **Emotional authenticity** — personal stories need to come from the human

The best AI content workflow is: **Human brief → AI draft → Human edit → Human publish**

---

## AI Content Workflow by Content Type

### Blog Posts and Articles

**Step 1: Human creates the brief (15 min)**
```
Brief template:
- Target keyword: [exact phrase]
- Reader: [specific person, their situation, what they want to know]
- Search intent: [informational / commercial / transactional]
- Unique angle: [what makes this different from existing results?]
- Key points to cover: [3-5 bullets with specific claims or data]
- Things to avoid: [common advice, overused examples, competitor mentions]
- Tone: [examples of existing brand voice — link 2-3 posts]
- CTA: [what should reader do at the end?]
- Target length: [word count]
```

**Step 2: AI generates outline + draft (2 min)**
- Paste brief into Claude or GPT-4
- Request a structured outline first, review before requesting full draft
- Ask for draft in sections, not all at once (better quality, easier to review)

**Step 3: Human reviews structure (10 min)**
- Does the outline actually answer what the reader wants?
- Is the unique angle present or buried?
- Are the headings scannable and keyword-relevant?

**Step 4: AI fills in draft (5 min)**
- Generate section by section for complex pieces
- For shorter posts, full draft is fine

**Step 5: Human edits for voice + accuracy (20-30 min)**
- Replace generic claims with specific data or examples
- Add personal stories, customer quotes, or original observations
- Fix factual claims (AI hallucinates statistics — verify everything)
- Inject brand voice and terminology
- Add internal links

**Step 6: SEO pass (10 min)**
- Verify primary keyword in title, H1, first 100 words, meta description
- Check for natural keyword variation throughout
- Add image alt text, check URL slug

**Total human time: ~60 min vs 3-4 hours without AI**

---

### Content Repurposing with AI

AI excels at repurposing existing content:

**Blog → Social posts**
```
Prompt: "Turn this blog post into 5 LinkedIn posts, each highlighting a different insight. Keep the voice [description]. Each post should stand alone without requiring readers to have read the article."
```

**Blog → Email newsletter**
```
Prompt: "Summarize this blog post into a 150-word email newsletter intro that teases the key insight and drives readers to click through. Subject line options: [3 variations]."
```

**Long article → Short explainer**
```
Prompt: "Condense this 2000-word article into a 400-word version for someone with no background in [topic]. Remove jargon and examples, keep the core framework."
```

**Video/podcast transcript → Blog post**
```
Prompt: "I have a transcript of a podcast episode below. Extract the key insights and structure them as a blog post with headers. Keep the speaker's voice and specific examples. Don't add anything not in the transcript."
```

---

### Content Brief Template for AI-Assisted Book Chapters

When generating book content with AI (relevant for Book Generator product):

```
Chapter Brief:
- Book title and one-line premise: [title — what transformation does this book deliver?]
- Chapter number and title: [e.g., Chapter 3: "Building Your First Offer"]
- Reader's state entering chapter: [what do they know? what problem are they facing?]
- Reader's state leaving chapter: [what should they understand or be able to do?]
- Key points (3-5): [specific claims, not vague summaries]
- Primary example or case study: [real or illustrative example to use]
- Tone and style notes: [conversational / academic / practical / narrative]
- Things already covered: [avoid repeating from previous chapters]
- Chapter length: [word count target]
- How this chapter connects to next: [transition hook]
```

The more specific the brief, the better the AI output. Vague briefs produce generic chapters.

---

## Quality Control for AI Content

### The "Would I Be Embarrassed?" Test
Read every AI-generated paragraph and ask: "If a knowledgeable person in this field read this, would they cringe?" AI often generates confident-sounding but shallow content. Cut anything that doesn't pass this test.

### Fact-Check Everything
AI hallucinates:
- Statistics and percentages (especially without citing a source)
- Dates and timelines
- Quotes attributed to real people
- Product names, features, and pricing
- Research study results

**Rule:** Every factual claim needs a human to verify it before publishing.

### Voice Calibration
To get AI output closer to your brand voice:
- Provide 2-3 examples of on-brand content at the start of the prompt
- Add explicit voice descriptors: "Write this in a voice that is direct but not harsh, uses short sentences, avoids buzzwords, and sometimes uses dry humor"
- Do a final voice-pass edit: replace every sentence that sounds like "AI" with how a real person would say it

### Red Flags in AI Content

These patterns indicate generic, low-quality AI output — fix or remove:
- Opening with "In today's [world/landscape/environment]..."
- "It's important to note that..."
- "It's worth mentioning..."
- "This is a game-changer for..."
- Bullet lists with 5+ items where all items are equally important
- Conclusions that say "In conclusion, [exact summary of everything above]"
- Any paragraph that could apply to any industry (no specific details)
- Passive voice used to avoid taking a position

---

## Content Production System at Scale

### Content Pipeline (for teams publishing 10+ pieces/month)

```
Research → Brief → AI Draft → Human Edit → Review → Publish → Distribute
```

**Roles:**
- **Content Strategist**: Keyword research, brief creation, editorial calendar
- **AI Operator**: Prompting, draft generation, initial quality check
- **Human Editor**: Voice, accuracy, CTA, internal links, SEO pass
- **Publisher**: Final formatting, metadata, scheduling, distribution

**Batching for efficiency:**
- Research + brief: batch 8-10 briefs per session (same topic cluster = better context)
- Generation: run AI drafts overnight or in parallel for multiple pieces
- Editing: group by type (all how-tos together, all comparisons together)

### Content Quality Tiers

Not all content needs equal investment:

| Tier | Type | AI Role | Human Time | When to Use |
|------|------|---------|------------|-------------|
| **Tier 1 (Pillar)** | Hub articles, cornerstone guides | Structural help + research summaries | 4-6 hours | Highest-priority topics; will earn backlinks |
| **Tier 2 (Spoke)** | Supporting articles, how-tos | First draft with human edits | 2-3 hours | Regular cadence content |
| **Tier 3 (Programmatic)** | Template-based, location/use-case pages | Full generation with light editing | 30-60 min | Scale pages, long-tail coverage |

---

## AI Content Tools Comparison

| Tool | Best For | Limitations |
|------|----------|------------|
| **Claude (Anthropic)** | Long-form drafts, nuanced reasoning, following complex briefs | Slower than GPT for short tasks |
| **GPT-4o** | Fast generation, varied formats, instruction-following | Can be more generic on technical topics |
| **Perplexity** | Research with citations | Not great for generating finished prose |
| **Jasper** | Marketing-specific templates, team workflows | Expensive, output quality depends on model underneath |
| **Surfer AI** | SEO-optimized content with keyword integration | Tends toward keyword stuffing if not carefully prompted |

**Recommendation:** Use Claude for long-form and complex reasoning; GPT-4o for high-volume iteration; human editing for anything that represents your brand.

---

## Disclosure and Ethics

### When to Disclose AI Use
- **Blog posts and articles**: Not legally required in most jurisdictions, but consider transparency for thought leadership pieces that claim personal experience
- **Books**: KDP does not require AI disclosure as of 2024, but guidelines may evolve
- **Product-generated content**: Users of book generation tools should disclose if required by their publisher or platform

### Content That Should Never Be AI-Generated
- First-person personal stories (you can use AI to help structure/edit, but the story must be real)
- Expert claims you can't verify or substantiate
- Medical, legal, or financial advice without qualified review
- Testimonials attributed to real people

### Quality is the Best Policy
The strongest argument for responsible AI use isn't ethics — it's quality. AI-generated content that adds no value hurts your SEO (thin content), damages your brand (generic voice), and erodes reader trust. The best AI content strategy is one where readers can't tell the difference.

---

## Integration with Content Strategy

When combining AI content production with a content strategy:

1. **Don't let AI dictate what to write** — let the strategy determine topics, let AI help execute
2. **Pillar content = higher human investment** — hub articles that will represent your brand for years deserve more editing time
3. **Programmatic content = AI's sweet spot** — template-based, data-driven pages scale well with AI
4. **Maintain a voice guide** — a documented brand voice guide is essential for consistent AI prompting across a team
5. **Review AI output against content strategy goals** — does this piece achieve the buyer stage target? Does it link to the right product pages?

---

## Related Skills

- **content-strategy**: Planning what content to create
- **copywriting**: Writing individual content pieces with quality
- **programmatic-seo**: Scaling AI content for template-based pages
- **seo-audit**: Diagnosing when AI content is underperforming
