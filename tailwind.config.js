
export default {
    theme: {
      extend: {

        
        animation: {
          'fade-in': 'fadeIn 0.3s ease both',
        },
        keyframes: {
          fadeIn: {
            from: { opacity: 0 },
            to: { opacity: 1 },
          },
        },

        fontFamily: {
          productsans: ['productsans', 'sans-serif'],
        }
      },
    },






  };

  

<script>
  AOS.init();
</script>