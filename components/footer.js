class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
   <footer class="footer-lemos mt-5 py-2"> 
    <div class="container-fluid px-md-5">
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-center">
            
            <div class="text-center text-md-left mb-2 mb-md-0">
                <span style="color: var(--light-gray); margin-right: 10px;">© 2026 Megan White</span>
                <span class="small text-muted border-left pl-2" style="font-size: 0.75rem; opacity: 0.8; border-color: #6c757d;">
                    Site by <a href="https://www.linkedin.com/in/ahmadif/" target="_blank" class="text-decoration-none text-secondary">Farzin Ahmadi</a>
                </span>
            </div>

            <div class="text-center text-md-right">
                <a href="/" class="text-decoration-none mx-2"><i class="footer-icons fa-solid fa-house" aria-hidden="true"></i></a>
                <a href="" target="_blank" class="text-decoration-none mx-2"><i class="fab footer-icons fa-linkedin" aria-hidden="true"></i></a>
                <a href="" target="_blank" class="text-decoration-none mx-2"><i class="footer-icons fa-brands fa-google-scholar" aria-hidden="true"></i></a>
            </div>

        </div>
    </div>
</footer>
    `;
  }
}

customElements.define('footer-component', Footer);