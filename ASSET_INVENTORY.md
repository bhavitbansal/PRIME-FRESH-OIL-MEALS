# Prime Fresh Oil Mills — Asset Inventory (eCell Qualification Challenge)

**Audit date:** 25 October 2026
**Sources of truth:** `README_START_HERE.txt`, `MEDIA_INDEX.csv`, and the supplied Drive attachments under `/Users/bhav7/Documents/Website /drive-download-…`
**Status:** Inspection phase retained; site implemented and later updated with the supplied logo and a frontend-only enquiry list.

---

## 1. Confirmed / supplied assets

| # | File (descriptive name) | Original WhatsApp filename | Asset type | Confirmed purpose | Proposed website section |
|---|---|---|---|---|---|
| 1 | `Prime_Fresh_Oil_Mills_Original_Logo.jpg` | `-0000033-PHOTO-2026-10-18-21-23-55.jpg` | JPEG (logo) | Original company logo, displayed unchanged as supplied (no wording/colour/proportion edits). Copy in `assets/prime-fresh-oil-mills-logo.jpg`. | Header (image); footer keeps a text wordmark |
| 2 | `Yellow_Mustard_Seeds.jpg` | `-0000040-PHOTO-2026-10-18-20-53-15.jpg` | JPEG photo | Yellow mustard seeds (input to bestseller yellow mustard oil) | Bestsellers / Products |
| 3 | `Groundnut_Seeds.jpg` | `-0000030-PHOTO-2026-10-18-21-34-29.jpg` | JPEG photo | Groundnut seeds | Bestsellers / Products |
| 4 | `Sesame_Seeds_Photo_1.jpg` | `-0000028-PHOTO-2026-10-18-21-40-13.jpg` | JPEG photo | Sesame seeds | Bestsellers / Products |
| 5 | `Sesame_Seeds_Photo_2.jpg` | `-0000027-PHOTO-2026-10-18-21-40-13.jpg` | JPEG photo | Sesame seeds | Bestsellers / Products |
| 6 | `Black_Sesame_Seeds.jpg` | `-0000026-PHOTO-2026-10-18-21-40-13.jpg` | JPEG photo | Black sesame seeds | Bestsellers / Products |
| 7 | `Black_Mustard_Seeds.jpg` | `-0000009-PHOTO-2026-10-19-19-52-00.jpg` | JPEG photo | Black mustard seeds | Bestsellers / Products |
| 8 | `Yellow_Mustard_Cake.jpg` | `-0000005-PHOTO-2026-10-19-21-17-38.jpg` | JPEG photo | Yellow mustard de-oiled cake | Products |
| 9 | `Black_Mustard_Cake.jpg` | `-0000003-PHOTO-2026-10-19-21-19-03.jpg` | JPEG photo | Black mustard de-oiled cake | Products |
| 10 | `Warehouse_Storage_Bags.mp4` | `-0000045-VIDEO-2026-10-18-16-45-57.mp4` | MP4 video | Warehouse / storage footage | Facilities |
| 11 | `Facility_Oil_Processing_Equipment.mp4` | `-0000046-VIDEO-2026-10-18-16-45-57.mp4` | MP4 video | Oil processing equipment footage | Facilities |

## 2. Actual on-disk paths of supplied attachments

Base folder: `/Users/bhav7/Documents/Website /drive-download-20261025T111626Z-1-001/`

- Product photos (all 8): `/Users/bhav7/Documents/Website /drive-download-20261025T111626Z-1-001/<DescriptiveName>.jpg`
- Videos (both): `/Users/bhav7/Documents/Website /drive-download-20261025T111815Z-1-001/<DescriptiveName>.mp4`
- Challenge docs: `/Users/bhav7/Documents/Website /drive-download-20261025T111800Z-1-001/{MEDIA_INDEX.csv,README_START_HERE.txt}`

## 3. Asset status summary

- ✅ Original logo supplied on 26 Oct 2026 (`Prime_Fresh_Oil_Mills_Original_Logo.jpg`, 1171×807); copied unchanged to `assets/prime-fresh-oil-mills-logo.jpg` and used in the header.
- ✅ 8 / 8 labeled product photos located and accounted for.
- ✅ 2 / 2 facility videos located and accounted for.
- ✅ `README_START_HERE.txt` and `MEDIA_INDEX.csv` read in full.
- ❌ Standalone yellow mustard oil product photo **not supplied** (constraint acknowledged; must not relabel seed photo as oil).

## 4. Issues / gaps / risks (pre-implementation)

1. **Logo asset** — resolved 26 Oct 2026: supplied file copied unchanged to `assets/prime-fresh-oil-mills-logo.jpg` and displayed in the header.
2. **Logo artwork** — the supplied image is displayed exactly as provided; no wording, colours, or proportions were altered.
3. **Unconfirmed business address** — must use explicit placeholder, not invented.
4. **Missing claim data** — no certifications, capacities, prices, specs, or factual claims may be invented.
5. **Quote form** — frontend only; must not pretend to submit.
6. **WhatsApp registration screenshot / source chat** — deliberately excluded; must not be recreated.
7. **Path hazards** — parent folder name ends with a space (`Website `); Drive subfolders use long timestamped names; `MEDIA_INDEX.csv` logical folder prefixes (`01_Branding/`, `02_Product_Images/`, `03_Facility_Videos/`) do not match real on-disk layout.

## 5. Verification method & limits

- Images inspected programmatically (dimensions, mode, progressive/JPEG-2000-style flags, ICC profiles, EXIF, average colour/hue statistics, coarse colour grids). Current model could not render images, so content identification is **colour/statistical**, not visual; owner-chat labels remain the authoritative mapping.
- Videos parsed at container level (ISO-BMFF): H.264 video + AAC audio, single video + single audio track each; durations ≈ 7.3 s (`Facility_Oil_Processing_Equipment.mp4`) and ≈ 8.9 s (`Warehouse_Storage_Bags.mp4`).

---

*End of inspection report. See `README.md` for the current site implementation and run instructions.*
