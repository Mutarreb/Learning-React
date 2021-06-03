import '../styles/Footer.css'
export function Footer(props) {
  return (

    <footer class="main-footer">


      <nav class="social-nav">
        
        <ul>
        <h4 class ="section-name"> Social Media </h4>
        <li><a href="https://facebook.com/sorrento">
          <i class="fab fa-facebook-square"></i> Facebook
        </a></li>
        <li><a href="https://instagram.com/sorrento">
          <i class="fab fa-instagram-square"></i> Instagram
        </a></li>
        <li> <a href="https://twitter.com/sorrento">
          <i class="fab fa-twitter-square"></i> Twitter
        </a> </li>
        </ul>
      </nav>

      

      <div class="address"> 
      <ul> <h4>Address</h4> 
       <li>Sorrento by the Sea </li>
      <li>42 Holyrood Avenue</li>
      <li>Sorrento VIC 3943</li> 
      <li>mobile: 0435 123 456</li></ul> </div>

      <p class="copyright">&copy; 2021 Sorrento by the Sea</p>
    </footer>

  )
}

export default Footer