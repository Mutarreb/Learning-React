import '../styles/Footer.css'
export function Footer(props) {
  return (
    <div className="Footer">
      <footer class="main-footer">
        

        <nav class="social-nav">
          <a href="https://facebook.com/sorrento">
            <i class="fab fa-facebook-square"></i>
          </a>
          <a href="https://instagram.com/sorrento">
            <i class="fab fa-instagram-square"></i>
          </a>
          <a href="https://twitter.com/sorrento">
            <i class="fab fa-twitter-square"></i>
          </a>
          
          <p class="copyright">&copy; Sorrento by the Sea</p>
  
        </nav>
      </footer>
    </div>
  )
}

export default Footer