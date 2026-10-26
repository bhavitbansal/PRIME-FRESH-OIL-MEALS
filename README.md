# Prime Fresh Oil Mills — Website

Static front-end website for Prime Fresh Oil Mills (edible seeds, oils and de-oiled cakes).

## Stack

- Plain HTML5, CSS3 and vanilla JavaScript. No frameworks, no build step, no npm dependencies.

## Run locally

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

then visit `http://localhost:8000/index.html`.

## Assets

Product photography and facility videos are referenced from the supplied Drive download
folders by their real filenames, for example:

- `assets/prime-fresh-oil-mills-logo.jpg` (supplied company logo, displayed in the header)
- `drive-download-20261025T111626Z-1-001/Yellow_Mustard_Seeds.jpg`
- `drive-download-20261025T111626Z-1-001/Sesame_Seeds_Photo_1.jpg`
- `drive-download-20261025T111626Z-1-001/Sesame_Seeds_Photo_2.jpg`
- `drive-download-20261025T111626Z-1-001/Black_Sesame_Seeds.jpg`
- `drive-download-20261025T111626Z-1-001/Black_Mustard_Seeds.jpg`
- `drive-download-20261025T111626Z-1-001/Groundnut_Seeds.jpg`
- `drive-download-20261025T111626Z-1-001/Yellow_Mustard_Cake.jpg`
- `drive-download-20261025T111626Z-1-001/Black_Mustard_Cake.jpg`
- `drive-download-20261025T111815Z-1-001/Facility_Oil_Processing_Equipment.mp4`
- `drive-download-20261025T111815Z-1-001/Warehouse_Storage_Bags.mp4`

The company logo is the supplied artwork, referenced at
`assets/prime-fresh-oil-mills-logo.jpg` and displayed in the header without alteration
(alongside the text-based footer wordmark).

## Status

Frontend demonstration only. The quote form validates and confirms a frontend submission; it
does not send data anywhere.

The catalogue also includes a frontend-only enquiry list: products can be added with
quantities, reviewed, and copied into the form's message field. No order is placed, no stock
is reserved, and nothing is transmitted.

## Constraints respected

- No unsupported claims (certifications, capacities, prices, specifications) were added.
- No standalone yellow mustard oil product photo exists; a “Product photo coming soon” tile is
  used for oil products instead of relabelling seed photography.
- Address is shown as “Address to be confirmed”.
- WhatsApp registration screenshot and source chat were not recreated.
