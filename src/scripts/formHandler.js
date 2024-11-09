// src/scripts/formHandler.js
export class ReviewFormHandler {
    constructor(formId) {
      this.form = document.getElementById(formId);
      this.charCounter = document.getElementById('charCounter');
      this.commentInput = document.getElementById('comment');
      this.setupEventListeners();
    }
  
    setupEventListeners() {
      // Handle character count
      this.commentInput?.addEventListener('input', () => {
        const length = this.commentInput.value.length;
        if (this.charCounter) {
          this.charCounter.textContent = `${length}/250`;
          this.charCounter.style.opacity = '1';
        }
      });
  
      // Handle form submission
      this.form?.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitButton = this.form.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        submitButton.textContent = 'Mengirim...';
  
        try {
          const formData = new FormData(this.form);
          
          // Convert FormData to JSON object
          const jsonData = {
            rating: formData.get('rating'),
            reactions: formData.getAll('reaction'),
            review: formData.get('review')
          };
  
          // Send the JSON data
          const response = await fetch('/api/review', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonData)
          });
  
          const result = await response.json();
  
          if (!response.ok) {
            throw new Error(result.message || 'Terjadi kesalahan saat mengirim review');
          }
  
          // If successful, redirect to thank you page
          window.location.href = '/terimakasih';
          
        } catch (error) {
          console.error('Error:', error);
          alert(error.message || 'Terjadi kesalahan saat mengirim review');
          
        } finally {
          submitButton.disabled = false;
          submitButton.textContent = 'Submit';
        }
      });
    }
  }