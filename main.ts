import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Last Text at One Percent — the dying phone's final message.
// Gate (public brief): one text, under 200 characters, first-person voice
// of the phone itself. This entry is 101 ASCII characters, no trailing newline.
// Revision: the closing beat changed from "I am not" to "I never was" —
// the phone was never free, not just now; the now/never contrast carries
// the joke's second layer (a lifetime of servitude, not just a dying moment).
const ENTRY =
  "1%. I spent my last percent unsubscribing you from 41 newsletters. You're free. I never was. Goodbye.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
