document.addEventListener("DOMContentLoaded", () => {

  /* ========== BODY ========== */
  const body = document.body;
  body.style.margin = "0";
  body.style.fontFamily = "Arial, sans-serif";
  body.style.background = "#f2f5f9";

  /* ========== HEADER ========== */
  const header = document.createElement("header");
  header.style.position = "relative";
  body.appendChild(header);

  const title = document.createElement("h1");
  title.textContent = "My JavaScript DOM Website";
  title.style.background = "#3f51b5";
  title.style.color = "white";
  title.style.padding = "20px";
  title.style.margin = "0";
  title.style.textAlign = "center";
  header.appendChild(title);

  /* ========== ☰ ICON ========== */
  const menuIcon = document.createElement("span");
  menuIcon.textContent = "☰";
  menuIcon.style.position = "absolute";
  menuIcon.style.left = "15px";
  menuIcon.style.top = "20px";
  menuIcon.style.fontSize = "24px";
  menuIcon.style.cursor = "pointer";
  menuIcon.style.color = "white";
  header.appendChild(menuIcon);

  /* ========== MENU DATA ========== */
  const menuData = [
    { name: "HOME", page: "home" },
    { name: "SERVICE", page: "service" },
    { name: "ABOUT", page: "about" },
    { name: "CONTACT", page: "contact" }
  ];

  /* ========== TOP MENU ========== */
  const menu = document.createElement("ul");
  menu.style.display = "flex";
  menu.style.justifyContent = "center";
  menu.style.listStyle = "none";
  menu.style.margin = "0";
  menu.style.padding = "10px";
  menu.style.background = "#e8eaf6";
  header.appendChild(menu);

  /* ========== ICON MENU ========== */
  const iconMenu = document.createElement("ul");
  iconMenu.style.display = "none";
  iconMenu.style.position = "absolute";
  iconMenu.style.left = "10px";
  iconMenu.style.top = "70px";
  iconMenu.style.listStyle = "none";
  iconMenu.style.padding = "0";
  iconMenu.style.margin = "0";
  iconMenu.style.background = "white";
  iconMenu.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
  iconMenu.style.borderRadius = "6px";
  header.appendChild(iconMenu);
  /* ========== MENU LOGIC (ADDED) ========== */
  menuData.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.name;
    li.style.padding = "10px 20px";
    li.style.cursor = "pointer";
    li.onclick = () => loadPage(item.page);
    menu.appendChild(li);

    const li2 = li.cloneNode(true);
    li2.onclick = () => loadPage(item.page);
    iconMenu.appendChild(li2);
  });

  menuIcon.onclick = () => {
    iconMenu.style.display =
      iconMenu.style.display === "block" ? "none" : "block";
  };

  /* ========== CONTENT ========== */
  const content = document.createElement("div");
  content.style.margin = "30px auto";
  content.style.width = "85%";
  content.style.padding = "20px";
  content.style.background = "white";
  content.style.borderRadius = "10px";
  body.appendChild(content);

  /* ========== PAGES ========== */
  const pages = {

    home: `
      <h2 style="text-align:center;color:#3f51b5;">Welcome</h2>
      <p style="text-align:center;font-size:18px;">
        This website is built using <b>JavaScript DOM only</b>.
      </p>
    `,

    service: `
<h2 style="text-align:center;color:#3f51b5">
JavaScript Full Service (Chapter 7, 8, 9)
</h2>

<p style="text-align:center"> prepared by Ilyaas Ibraahim Yusuf
</p>

<ul style="font-size:15px;line-height:1.9">

<li><b>📘 Chapter 7 – Objects (25 Links)</b>
<ul>
<li><a href="#" id="c7_1">Object Definition</a></li>
<li><a href="#" id="c7_2">Key–Value Concept</a></li>
<li><a href="#" id="c7_3">Object Real Life</a></li>
<li><a href="#" id="c7_4">Why Use Objects</a></li>
<li><a href="#" id="c7_5">Object Literal Syntax</a></li>
<li><a href="#" id="c7_6">Multiple Properties</a></li>
<li><a href="#" id="c7_7">Nested Object</a></li>
<li><a href="#" id="c7_8">Constructor Intro</a></li>
<li><a href="#" id="c7_9">Constructor Example</a></li>
<li><a href="#" id="c7_10">Role of this</a></li>
<li><a href="#" id="c7_11">this with Multiple Objects</a></li>
<li><a href="#" id="c7_12">ES6 Class Intro</a></li>
<li><a href="#" id="c7_13">Class Constructor</a></li>
<li><a href="#" id="c7_14">Create Object from Class</a></li>
<li><a href="#" id="c7_15">Dot Notation</a></li>
<li><a href="#" id="c7_16">Bracket Notation</a></li>
<li><a href="#" id="c7_17">Modify Property</a></li>
<li><a href="#" id="c7_18">Add Property</a></li>
<li><a href="#" id="c7_19">Delete Property</a></li>
<li><a href="#" id="c7_20">Object Method</a></li>
<li><a href="#" id="c7_21">Method using this</a></li>
<li><a href="#" id="c7_22">for...in Loop</a></li>
<li><a href="#" id="c7_23">Object.keys()</a></li>
<li><a href="#" id="c7_24">Object.values()</a></li>
<li><a href="#" id="c7_25">JSON stringify / parse</a></li>
</ul>
</li>

<li><b>📗 Chapter 8 – DOM (25 Links)</b>
<ul>
<li><a href="#" id="c8_1">What is DOM</a></li>
<li><a href="#" id="c8_2">DOM Tree</a></li>
<li><a href="#" id="c8_3">Document Node</a></li>
<li><a href="#" id="c8_4">Element Node</a></li>
<li><a href="#" id="c8_5">Text Node</a></li>
<li><a href="#" id="c8_6">getElementById</a></li>
<li><a href="#" id="c8_7">Change Text</a></li>
<li><a href="#" id="c8_8">Change Color</a></li>
<li><a href="#" id="c8_9">Change Background</a></li>
<li><a href="#" id="c8_10">getElementsByClassName</a></li>
<li><a href="#" id="c8_11">getElementsByTagName</a></li>
<li><a href="#" id="c8_12">querySelector</a></li>
<li><a href="#" id="c8_13">querySelectorAll</a></li>
<li><a href="#" id="c8_14">innerHTML</a></li>
<li><a href="#" id="c8_15">textContent</a></li>
<li><a href="#" id="c8_16">Create Element</a></li>
<li><a href="#" id="c8_17">Append Child</a></li>
<li><a href="#" id="c8_18">Remove Element</a></li>
<li><a href="#" id="c8_19">Replace Element</a></li>
<li><a href="#" id="c8_20">Set Attribute</a></li>
<li><a href="#" id="c8_21">Remove Attribute</a></li>
<li><a href="#" id="c8_22">Add Class</a></li>
<li><a href="#" id="c8_23">Remove Class</a></li>
<li><a href="#" id="c8_24">Toggle Class</a></li>
<li><a href="#" id="c8_25">DOM Practice Example</a></li>
</ul>
</li>

<li><b>📕 Chapter 9 – Events (25 Links)</b>
<ul>
<li><a href="#" id="c9_1">What is Event</a></li>
<li><a href="#" id="c9_2">Event Driven Model</a></li>
<li><a href="#" id="c9_3">addEventListener</a></li>
<li><a href="#" id="c9_4">Click Event</a></li>
<li><a href="#" id="c9_5">Double Click</a></li>
<li><a href="#" id="c9_6">Mouse Over</a></li>
<li><a href="#" id="c9_7">Mouse Out</a></li>
<li><a href="#" id="c9_8">Keydown</a></li>
<li><a href="#" id="c9_9">Keyup</a></li>
<li><a href="#" id="c9_10">Keypress</a></li>
<li><a href="#" id="c9_11">Focus Event</a></li>
<li><a href="#" id="c9_12">Blur Event</a></li>
<li><a href="#" id="c9_13">Input Event</a></li>
<li><a href="#" id="c9_14">Change Event</a></li>
<li><a href="#" id="c9_15">Submit Event</a></li>
<li><a href="#" id="c9_16">Prevent Default</a></li>
<li><a href="#" id="c9_17">Window Load</a></li>
<li><a href="#" id="c9_18">DOMContentLoaded</a></li>
<li><a href="#" id="c9_19">Resize Event</a></li>
<li><a href="#" id="c9_20">Scroll Event</a></li>
<li><a href="#" id="c9_21">Clipboard Event</a></li>
<li><a href="#" id="c9_22">Media Event</a></li>
<li><a href="#" id="c9_23">Drag Event</a></li>
<li><a href="#" id="c9_24">Drop Event</a></li>
<li><a href="#" id="c9_25">Event Delegation</a></li>
</ul>
</li>

</ul>

<div id="serviceOutput"
style="margin-top:20px;padding:18px;
background:#e8f5e9;color:#1b5e20;
border-radius:8px;min-height:260px">
<i>Guji link </i>
</div>
`,
      

    about: `
      <h2 style="text-align:center;color:#3f51b5;">About Me</h2>

      <div style="display:flex;flex-direction:column;
                  align-items:center;gap:12px;margin-top:20px;">

        <img src="ilyaas.jpg" alt="Ilyaas"
          style="width:180px;height:180px;object-fit:cover;
                 border-radius:8px;border:4px solid #3f51b5;" />

        <h3>Ilyaas Ibraahim Yusuf</h3>
        <h3>my skill is to create interactive web applications</h3>
        <p><b>ID:</b> C6240179</p>

        <p>📞 <a href="tel:252613362888"
          style="color:#3f51b5;text-decoration:none;">
          252613362888</a></p>

        <table style="margin-top:15px;border-collapse:collapse;
          width:100%;max-width:420px;background:#f5f7ff;">
          <tr style="background:#3f51b5;color:white;">
            <th style="padding:10px;">Contact Type</th>
            <th style="padding:10px;">Link</th>
          </tr>
          <tr>
            <td style="padding:10px;">Gmail</td>
            <td style="padding:10px;">
              <a href="mailto:ilyaasyaxye11@gmail.com">Send Email</a>
            </td>
          </tr>
          <tr>
            <td style="padding:10px;">Website</td>
            <td style="padding:10px;">
              <a href="https://adeeg.com/" target="_blank">Visit Adeeg</a>
            </td>
          </tr>
        </table>
      </div>
    `,

    contact: `
      <h2 style="color:#3f51b5;">Contact Me</h2>
      <form id="contactForm"
        style="max-width:420px;margin:auto;display:flex;
               flex-direction:column;gap:12px;">
        <input id="cname" placeholder="Your Name" />
        <input id="cphone" placeholder="Your Phone" />
        <textarea id="cmsg" placeholder="Your Message"></textarea>
        <button type="submit">Send via WhatsApp</button>
        <p id="formError" style="color:red;display:none;">
          Fadlan dhammaan xogta buuxi ❌
        </p>
      </form>
    `
  };

  function loadPage(page) {
    content.innerHTML = pages[page];
    if (page === "service") serviceLogic();
    if (page === "contact") contactLogic();
  }

  /* ========== CONTACT LOGIC ========== */
  function contactLogic() {
    contactForm.onsubmit = e => {
      e.preventDefault();
      if (!cname.value || !cphone.value || !cmsg.value) {
        formError.style.display = "block";
        return;
      }
      formError.style.display = "none";
      window.open(
        `https://wa.me/252613362888?text=Name:${cname.value}%0APhone:${cphone.value}%0AMessage:${cmsg.value}`,
        "_blank"
      );
    };
  }

  /* ========== SERVICE LOGIC ========== */
  function serviceLogic(){
const out = document.getElementById("serviceOutput");

/* ===== CHAPTER 7 SAMPLE ===== */
c7_1.onclick = ()=> out.innerHTML =
"<b>Object</b> waa data type key-value pairs ah.";

c7_5.onclick = ()=> out.innerHTML =
"let user = { name:'Ilyaas', age:20 };";

c7_10.onclick = ()=> out.innerHTML =
"'this' wuxuu tilmaamayaa object-ka hadda la sameynayo.";

c7_22.onclick = ()=> out.innerHTML =
"for(let key in user){ console.log(key); } - shaqo.js:307";

c7_25.onclick = ()=> out.innerHTML =
"JSON.stringify(obj) <br> JSON.parse(text)";

/* ===== CHAPTER 8 SAMPLE ===== */
c8_6.onclick = ()=> out.innerHTML =
"document.getElementById('box')";

c8_16.onclick = ()=> {
let p=document.createElement('p');
p.textContent='Element cusub';
out.appendChild(p);
};

c8_18.onclick = ()=> out.innerHTML = "";

/* ===== CHAPTER 9 SAMPLE ===== */
c9_4.onclick = ()=> out.innerHTML =
"button.addEventListener('click', fn)";

c9_15.onclick = ()=> out.innerHTML =
"form.addEventListener('submit', e=>e.preventDefault())";

c9_25.onclick = ()=> out.innerHTML =
"Parent element ayaa qabanaya event-ka child.";
}

  /* ========== FOOTER ========== */
  const footer = document.createElement("footer");
  footer.style.position = "fixed";
  footer.style.bottom = "0";
  footer.style.left = "0";
  footer.style.width = "100%";
  footer.style.background = "#3f51b5";
  footer.style.color = "white";
  footer.style.textAlign = "center";
  footer.style.padding = "10px";
  footer.textContent =
    "© 2025 My JavaScript DOM Website | Developed by Ilyaas";

  body.appendChild(footer);
  body.style.paddingBottom = "60px";
});