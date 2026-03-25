# Project Notes & Troubleshooting Log

This file acts as an ongoing log for documenting mistakes, why they happened, and how they were fixed. 

## 1. Vercel Deployment 404 Error (Sweet Haven Café)
- **Mistake:** The `dist/` folder was listed in `.gitignore`, preventing the built website files from being pushed to GitHub. Meanwhile, `.vercelignore` was configured to ignore the source code. As a result, Vercel received neither the built files nor the source code needed to build them, resulting in a 404 NOT FOUND error.
- **Fix:** Removed `dist/` (and `build/`) from `.gitignore` in the `sweet-haven-cafe` folder. This allows the locally built `dist/` folder to be committed and pushed to GitHub. Since `.vercelignore` ignores the source, Vercel just treats the `dist/` folder as a static site and serves it correctly.

## 2. Text Visibility and Contrast
- **Mistake:** Text appeared grey and was difficult to read after hosting, breaking the premium aesthetic.
- **Fix:** Audited the CSS color variables, improved text contrast across the site, and refined the scroll-reveal animations to guarantee smooth readability.

## 3. Google AI Studio Dependency
- **Mistake:** The original logic relied on Google AI Studio, causing the website not to work independently on a local host or typical server environments.
- **Fix:** Modified the logic to remove the AI Studio dependency, making the standalone site capable of running independently anywhere.

## 4. Accidental File Deletion (Sweet Haven)
- **Mistake:** A core file for the Sweet Haven website was accidentally deleted, breaking its functionality.
- **Fix:** Restored the missing parts and ensured all linked components were robust.

## 5. `vercel.json` Configuration
- **Mistake:** A `vercel.json` file can cause deployments to fail if it specifies the wrong build command, root directory, or output directory. Since Vercel automatically detects most frameworks, an incorrect `vercel.json` overriding these settings will break things. 
- **Fix:** Since the `dist/` folder is now just static files pushed to GitHub, Vercel natively serves static files with zero configuration required. Having no `vercel.json` is perfectly fine (and often preferred) for simple static hosting.

---

## AI Workflow Rules
As requested, for all future chats and tasks, the AI will document the following before or during every change:
1. **Why the change is being made:** The reasoning and the underlying problem.
2. **What the problem affected:** How the bug/issue broke the website or user experience.
3. **What the fix affected:** Which files were changed and how they resolved the issue.

## 6. Showcase Phone Experience
- **Why the change is being made:** The phone showcase experience was clunky with tap navigation and an unnecessary virtual phone frame when viewed on an actual phone.
- **What the problem affected:** Mobile users had a poor experience navigating the showcased sites and had less screen real estate due to the virtual phone bezel.
- **What the fix affected:** `showcase.js` and `showcase.css` to enable swipe navigation, enforce mobile view on mobile devices, and remove the virtual phone frame.

## 7. Mamak Site Mobile Layout Clash
- **Why the change is being made:** The "24/7", "20+", and crescent elements were overlapping the "Order Online" button on mobile screens.
- **What the problem affected:** The overlap made the "Order Online" button unclickable and visually messy on phone screens.
- **What the fix affected:** CSS in `sites/mamak` to adjust positioning of the overlapping elements specifically for mobile screens.

## 8. Rooftop Bar Mobile Image Gallery 
- **Why the change is being made:** The gallery under the reservation table relied on cursor hover effects for color, which doesn't work well on touch devices. Also, only a few images were visible.
- **What the problem affected:** Mobile users couldn't see the full color of the images easily and couldn't scroll/rotate through the gallery easily.
- **What the fix affected:** CSS/JS in `sites/rooftop_bar` to make images full color on mobile and implemented an auto-rotating carousel.
- **Iterative Fix (Width Bug):** Initially, the mobile image carousel was set up with a `300%` width flex container, causing `50%` width images to be too large (`150vw`). This has been fixed by setting the container width to `max-content` and binding the image widths strictly to `50vw` each, ensuring exactly 2 images show at a time while flawlessly auto-scrolling.

## 9. Remote URL Migration
- **Why the change is being made:** Managing local copies of every website within the showcase repository was becoming cumbersome. Every small change to a sub-site required a commit to the showcase repo.
- **What the problem affected:** Increased repository size and duplicate maintenance efforts. If a site was updated on its own Vercel deployment, the showcase remained outdated.
- **What the fix affected:** Updated `js/showcase.js` to point directly to the live Vercel URLs of each project. This allows the showcase to always display the most current version of each site automatically. The local `sites/` directory was removed to streamline the project.

## 10. Mobile Navigation & Header Refinement
- **Why the change is being made:** The swipe navigation was unreliable for some users, and the mobile restaurant header was taking up too much valuable screen space.
- **What the problem affected:** Users struggled to navigate between showcased sites, and the iframe content felt cramped on mobile screens.
- **What the fix affected:** `showcase.css` and `showcase.js` to remove the mobile header, eliminate the "Slide to Switch" hint, and restore navigation arrows/dots with a transparent, small design that prioritizes screen space and precise touch interaction.
