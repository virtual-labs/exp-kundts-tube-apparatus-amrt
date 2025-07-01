## Procedure


### Apparatus:
 

A long glass tube, piston, metal rod, powdered cork, ruler, clamps and leather piece.

<h2>Procedure for Performing Real Lab:</h2>
<ol>
  <li>Take the glass tube and put some powdered cork dust in it.</li>
  <li>By fast rotatory movement, distribute the powder uniformly inside the tube.</li>
  <li>Fix the tube tightly with the holder.</li>
  <li>Tightly clamp the metal rod at the centre.</li>
  <li>Introduce the piston to the other end of the glass tube.</li>
  <li>Rub the rod at <strong>B</strong>, lengthwise with a piece of rosined leather and set it into longitudinal vibrations at its fundamental frequency.</li>
  <li>Move the piston in and out of the tube until resonance is obtained.</li>
  <li>The cork dust inside the tube becomes deposited as heaps.</li>
  <li>Select the position of the extreme nodes carefully and measure the distance between them. Find the number of heaps and calculate the average distance between two consecutive peaks.</li>
  <li>Note the length of the rod and repeat the experiment.</li>
  <li>The velocity of sound through air is taken as 343 m/s.</li>
  <li>Using equation (3), calculate the velocity of sound through the rod.</li>
  <li>Using equation (5), calculate the Young's modulus of the rod.</li>
</ol>

<h4>Note:</h4>
<ul>
  <li>The glass tube must be perfectly dry as moisture affects sound velocity.</li>
  <li>The metallic rod should be clamped exactly at the middle.</li>
  <li>The powder must be evenly spread.</li>
  <li>The disc should not touch the glass tube, as it may cause the tube to break.</li>
</ul>

<h2>Procedure for Simulator:</h2>
<ol>
  <li>From the combo box <strong>Select Material</strong>, select the material of the rod.</li>
  <li>Click the <strong>Start Rubbing</strong> button to set longitudinal vibrations in the rod.</li>
  <li>Use the <strong>Rod Length</strong> slider to select the desired length of the experimental rod.</li>
  <li>Use the <strong>Piston Position</strong> slider to move the piston in and out of the glass tube to obtain resonance. At resonance, the dust will appear as heaps.</li>
  <li>Use the <strong>Scale Position</strong> slider to move the ruler and measure the length between the desired number of heaps. From that, calculate the length of one heap.</li>
  <li>The <strong>Show Result</strong> option displays the velocity of sound waves and the Young's modulus of the rod material.</li>
  <li>Click the <strong>Reset</strong> button to reset the conditions.</li>
  <li>The experiment can be repeated for different materials and rod lengths.</li>
</ol>

<h3>Observations:</h3>

<ul>
  <li>Length of the rod, <strong>l<sub>r</sub></strong> = …………… m</li>
  <li>Frequency of sound used, <strong>f</strong> = ………. Hz</li>
  <li>Velocity of sound in air, <strong>V<sub>a</sub></strong> = 343 m/s</li>
</ul>


<div style="display: block; margin-left: auto; margin-right: auto; text-align: center; width: fit-content;"><img src="./images/figure2.jpg" alt="Figure 2" style="max-width: 600px; height: auto;"><p style="text-align: center; font-size: smaller; font-style: italic;"></p></div>


<p><strong>Mean</strong> <em>l<sub>a</sub></em> = ……………. m</p>

<h3>Result:</h3>
<ul>
  <li>The velocity of sound wave through the rod = ………………… m/s</li>
  <li>Young’s modulus of the material of the rod = ………………. N/m²</li>
</ul>




<br><br><br><br><br>

# Procedure to View the Experiment Animation.

<style>
.download-section {
  /* background: #fff; */
  padding: 5px;
  border-radius: 12px;
  margin-bottom: 10px;
}

.download-link {
  display: inline-flex;
  align-items: center;
  background-color: #007bff;
  color: white;
  padding: 10px 16px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.download-link:hover {
  background-color: #0056b3;
}

.download-link svg {
  margin-right: 8px;
}

.copy-container {
  display: flex;
  align-items: center;
  background: #f5f5f5;
  padding: 10px;
  border-radius: 8px;
  max-width: 600px;
  font-family: Arial, sans-serif;
  position: relative;
}

.link-text {
  flex: 1;
  word-break: break-word;
}

.copy-icon {
  cursor: pointer;
  padding: 5px;
  margin-left: 10px;
  background-color: #e0e0e0;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.copy-icon:hover {
  background-color: #ccc;
}

.tooltip {
  position: absolute;
  right: 0;
  top: -30px;
  background: #333;
  color: #fff;
  padding: 3px 8px;
  font-size: 12px;
  border-radius: 4px;
  opacity: 0;
  transform: translateY(5px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
  z-index: 10;
}

.tooltip.show {
  opacity: 1;
  transform: translateY(0);
}
</style>
<div class="download-section" style="text-align: center;">
    <a href="simulation/flash/flashplayer.exe" class="download-link" download>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" viewBox="0 0 16 16">
        <path d="M.5 9.9V14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V9.9a.5.5 0 0 0-1 0V14H1V9.9a.5.5 0 0 0-1 0z"/>
        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
      </svg>
      Click Here to Download Flash Player
    </a>
  </div>

<br>
<div class="copy-container">
  <p><h4>Flash Content link:</h4></p>
  <span class="link-text" id="copyText"></span>
  <div class="copy-icon" onclick="copyLink()">📋</div>
  <div class="tooltip" id="tooltip">Copied!</div>
</div>

<script>
  const currentUrl = window.location.href;
  const basePath = currentUrl.substring(0, currentUrl.lastIndexOf("/"));
  const swfPath = basePath + "/simulation/flash/animation/index.swf";
  document.getElementById("copyText").textContent = swfPath;

  function copyLink() {
    const text = document.getElementById("copyText").textContent;
    const tooltip = document.getElementById("tooltip");

    navigator.clipboard.writeText(text).then(() => {
      // Show the tooltip
      tooltip.classList.add("show");

      // Hide after 1 second
      setTimeout(() => {
        tooltip.classList.remove("show");
      }, 1000);
    });
  }
</script>

<h2>Instructions to run the Flash animation on your system:</h2>

<strong>▶ Windows system</strong><br>
<strong>Step 1:</strong> Open Flash Player<br>
<img src="images/flash/figure1.jpg" alt="Flash Debugger" width="500px"><br>
<strong>Step 2:</strong> Copy the Flash content link by click the 📋 icon provided above.<br>

<strong>Step 3:</strong> Click <em>File → Open</em> from the Flash Player menu.<br>
<strong>Step 4:</strong> Paste the Flash content link in the Open window of the Flash Player and click the OK button.<br>
<img src="images/flash/figure2.jpg" alt="Open Flash Link" width="500px"><br><br>

<strong>▶ Linux system</strong><br>
<strong>Step 1:</strong> Install <code>Wine</code> on your Linux system.<br>
For Ubuntu: <code>sudo apt update</code><br>
<code>sudo apt install wine</code><br>
For Fedora: <code>sudo dnf install wine</code><br>
<strong>Step 2:</strong> Open terminal and navigate to the folder where the Flash Player is downloaded.<br>
<strong>Step 3:</strong> Open the Flash Player using <code>wine flashplayer.exe</code><br>
<img src="images/flash/figure1.jpg" alt="Flash Debugger" width="500px"><br>
<strong>Step 4:</strong> Copy the Flash content link by click the 📋 icon provided above.<br>
<strong>Step 5:</strong> Click <em>File → Open</em> from the Flash Player menu.<br>
<strong>Step 6:</strong> Paste the Flash content link in the Open window of the Flash Player and click OK.<br>
<img src="images/flash/figure2.jpg" alt="Open Flash Link" width="500px">
