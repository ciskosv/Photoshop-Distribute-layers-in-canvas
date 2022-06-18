# Photoshop Distribute layers in canvas
Photoshop script to distribute all you layers along your canvas.

I needed this script to print all the bibs for a race, each bib was previously generated individually to have the runner's name and number, so then I needed to put them all together based on the bib's material's roll's width to be printed.

So, I imported all my bibs images as layers (using the Photoshop's script "Load images into stack") and then run this script to put each bib one beside the other to cover the max width possible and then do the same below the previous row.
![image](https://user-images.githubusercontent.com/494355/174456751-ba9e7707-1a4f-4165-a544-897c3643a7c2.png)

# How does it work?
First it gets the actual canvas width, then get the actual layer's width and height to calculate how many layers are going to be placed one beside the other based on canvas width (columns), then it calculates how many rows are going to be needed, resize the canvas based on the calculated hight and then start the process filling columns and then rows.

# Notes
Make sure there's no empty layer (the script uses the quantity of layers to iterate).  Make sure all your images (layers) had the same size as it only get the measures of the active one.
