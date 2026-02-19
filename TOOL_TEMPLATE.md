# Tool Content Template & Guidelines

## ⚠️ CRITICAL RULES (Izbegavanje Problema)

1. **NIKAD ne stavljaj `slug` polje** - Astro automatski koristi filename kao ID
   - ❌ LOŠE: `slug: eleven-labs`
   - ✅ DOBRO: Koristi filename `elevenlabs.md`, Astro će genisati URL automatski

2. **Filename mora biti bez razmaka i specijalnih karaktera**
   - ❌ LOŠE: `Eleven Labs.md`, `eleven-labs.md`
   - ✅ DOBRO: `elevenlabs.md`

3. **category mora biti jedan od validnih:**
   - `writing`, `image`, `coding`, `video`, `audio`, `productivity`, `research`, `design`

4. **Svi stringovi u YAML-u moraju biti u navodnicima**
   - ❌ LOŠE: `- Ultra-realistic text-to-speech`
   - ✅ DOBRO: `- "Ultra-realistic text-to-speech"`

5. **Newline sekvence u longDescription koristi `\n\n` za paragraphe**
   - Koristi `"text paragraph 1\n\ntext paragraph 2"` za više paragrafa

---

## Template - Kopaj i Koristi

```yaml
---
title: [TOOL_NAME]
description: [SHORT_DESCRIPTION - 1 linija, max 160 karaktera]
category: [audio/writing/coding/video/image/design/productivity/research]
featured: true  # ili false
rank: [NUMBER]  # ranking 1-10+
url: [FULL_URL]
name: [TOOL_NAME]
longDescription: "[LONG_DESCRIPTION - 400-800 words sa \n\n za paragrafe]"
features:
  - "[Feature 1]"
  - "[Feature 2]"
  # minimum 8-10 features
useCases:
  - "[Use case 1]"
  - "[Use case 2]"
  # minimum 6-8 use cases
pricing:
  "[Plan Name]": "[Description]"
  # minimum 4-5 pricing tiers
pros:
  - "[Pro 1]"
  - "[Pro 2]"
  # minimum 4-5 pros
cons:
  - "[Con 1]"
  - "[Con 2]"
  # minimum 2-3 cons
alternatives:
  - name: "[Alternative Tool Name]"
    reason: "[Why this is an alternative]"
  # minimum 3-4 alternatives
faqItems:
  - question: "[Question]"
    answer: "[Answer]"
  # minimum 4 FAQ items
---
```

---

## Build Checklist - Korak po Korak

1. ✅ **Kreiraj datoteku** sa filename `[toolname].md` u `src/content/tools/`
2. ✅ **Bez `slug` polja** - Astro koristi filename kao ID
3. ✅ **Svi stringovi u navodnicima** - `"text"`
4. ✅ **category je valid** - jedan od dozvoljenih
5. ✅ **Paragrafи razdvojeni sa `\n\n`** u longDescription
6. ✅ **Sve feature/useCase/pro/con stavke u navodnicima**
7. ✅ **Minimum stavki:** 8 features, 6 useCases, 4 pricing, 4 pros, 2 cons, 3 alternatives, 4 FAQs
8. ✅ **Run `npm run build`** - Trebalo bi da prođe bez greške

---

## Primer Ispravnog Formata

```yaml
---
title: ElevenLabs
description: Advanced AI voice-generation platform creating hyper-realistic speech, narrations, and character voices.
category: audio
featured: true
rank: 6
url: https://elevenlabs.io
name: ElevenLabs
longDescription: "ElevenLabs is one of the industry's leading AI voice synthesis platforms...\n\nSecond paragraph here...\n\nThird paragraph here..."
features:
  - "Ultra-realistic text-to-speech"
  - "Voice cloning (instant or professional-quality)"
  - "Multilingual and multi-accent support"
useCases:
  - "Audiobook narration"
  - "Video content & social media production"
pricing:
  "Free Tier": "Limited characters, basic voices"
  "Starter Plan": "Personal use, more characters, higher quality"
pros:
  - "Best-in-class speech realism"
  - "Powerful voice cloning"
cons:
  - "Voice cloning requires voice samples"
  - "Commercial licensing can be expensive"
alternatives:
  - name: Murf.ai
    reason: Business-focused TTS with ready-made voices
faqItems:
  - question: "Can I clone my own voice?"
    answer: "Yes — ElevenLabs supports instant or advanced cloning with short voice recordings."
---
```

---

## Common Greške & Rešenja

| Problem | Razlog | Rešenje |
|---------|--------|--------|
| "Entry tools → [name] was not found" | `slug` polje je krivo ili filename ima razmake | Obriši `slug` polje, koristi clean filename bez specijalnih znakova |
| YAML parse error | Stringovi nisu u navodnicima | Stavi sve u `"quotes"` |
| Feature/UseCase kao object umesto string | Loša indentacija ili format | Provjeri indentaciju, koristi `-` za listu |
| URL validation error | URL nije validan | Koristi `https://` i kompletan URL |

---

## Kako Dodati Novi Tool

1. Kreiraj `src/content/tools/[toolname].md`
2. Kopaj template gore
3. Popuni sve polje sa pravim podacima
4. **NIJE potreban `slug`** - Astro generiše automatski
5. Pokreni `npm run build`
6. Proveri da li stranica radi na `http://localhost:4321/tool/[toolname]/`

---

**Ključna Pravila:**
🚫 Bez `slug` polja
✅ Filename bez razmaka/specijalnih znakova
✅ Sve u navodnicima
✅ Valid category
✅ Minimum stavki po sekciji
