/* Base64 encoded PNG icon */
const fs = require('fs');

// Create a simple colored square icon
const size = 128;
const canvas = new OffscreenCanvas(size, size);
const ctx = canvas.getContext('2d');

// Fill with a purple color
ctx.fillStyle = '#6366f1';
ctx.fillRect(0, 0, size, size);

// Draw a white inner circle
ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(size/2, size/2, size/3, 0, Math.PI * 2);
ctx.fill();

// Export to PNG
canvas.convertToBlob().then(blob => {
  const reader = new FileReader();
  reader.onloadend = () => {
    const base64data = reader.result;
    fs.writeFileSync('public/icon.png', Buffer.from(base64data.split(',')[1], 'base64'));
    console.log('Icon created successfully');
  };
  reader.readAsDataURL(blob);
});
