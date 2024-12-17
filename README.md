# Hybrid Stance Detection for Tweets  

Hello! 👋 I am **Bharath Sadineni**.  

In this day and age, misinformation is a pressing issue on social media. Platforms like Twitter often blur the lines between truth and falsehood, making it difficult to distinguish between credible information and lies.  

As a first step in leveraging Artificial Intelligence to address this challenge, I’ve developed a **Hybrid Stance Detection Model**. This project aims to identify the stance and authenticity of tweets in real-time.  

👉 **Check out the repository here**: [Hybrid Stance Detection for Tweets](https://github.com/BharathSadineni/Hybrid-Stance-Detection-for-Tweets)  

---

## Stance Detection System  

### **Getting Started**  
Follow these instructions to set up and run the project on your local machine for development and testing purposes.  

---

### **Prerequisites**  
Ensure you have Python installed on your system. The following libraries are also required for running the project:  

- `emoji`  
- `requests`  
- `tenacity`  
- `pandas`  
- `numpy`  
- `nltk`  
- `joblib`  
- `tqdm`  
- `scikit-learn`  
- `xgboost`  
- `jmespath`  
- `bs4`  
- `google`  

---

### **Installation**  

1. Install all dependencies using the following command:  
   ```bash
   pip install emoji requests tenacity pandas numpy nltk joblib tqdm scikit-learn xgboost jmespath bs4 google
   ```

2. Clone the repository to your local machine:  
   ```bash
   git clone https://github.com/BharathSadineni/Hybrid-Stance-Detection-for-Tweets.git
   cd Hybrid-Stance-Detection-for-Tweets
   ```

---

### **Usage**  

To start the stance detection system, execute the following command:  
```bash
python coordinator.py
```

---

### **What to Expect**  

#### **Initial Run**  
- The first execution may take up to **500 seconds** as the system preprocesses data, vectorizes text, and generates features.  
- After processing, the system will calculate and display the accuracy of stance predictions on test data.  
- You’ll be prompted to choose between:  
  - Using a **default URL** for stance detection, or  
  - Entering a **custom URL** (type `yes` to input your own).  
- Once analysis is complete, the detected stance and its accuracy percentage will be displayed.

#### **Subsequent Runs**  
- Subsequent runs will be faster (**100-200 seconds**) since only new data will be vectorized.  
- The system will again prompt you to specify a URL for stance detection. Enter your desired URL when asked to analyze its stance.

---

Feel free to explore and contribute to the project! If you have any questions or feedback, reach out or open an issue in the repository.  
