<a name="readme-top"></a>
<br />
<div align="center">

  <h3 align="center">Sentiment Analysis for Nepali Text</h3>

  <p align="center">
    In this project, we used MURIL (Multilingual Unsupervised Representations for Indian Languages), a multilingual BERT model, to perform sentiment analysis on Nepali text.
    
  </p>
</div>

<!-- omit in toc -->
## Table of Contents

- [About The Project](#about-the-project)
- [Dataset](#dataset)
- [Model](#model)


## About The Project

Sentiment analysis is the use of natural language processing, text analysis, computational linguistics, and biometrics to systematically identify, extract, quantify, and study affective states and subjective information. Sentiment analysis is widely applied to voice of the customer materials such as reviews and survey responses, online and social media, and healthcare materials for applications that range from marketing to customer service to clinical medicine. With the rise of deep language models, such as RoBERTa, also more difficult data domains can be analyzed, e.g., news texts where authors typically express their opinion/sentiment less explicitly.

Although there are some more works carried out in non-Nepali language, very few works have been carried out in Nepali language. The major objective of this project is to perform sentence level sentiment analysis in case of Nepali Language and perform EDA analysis in the available dataset.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Dataset

Source of the dataset [NepCOV19Tweets dataset](https://www.kaggle.com/datasets/mathew11111/nepcov19tweets) with 32,824 total tweets

- positive class: 14,823 samples
- neutral class: 4,591 samples
- negative class: 13,410 samples

## Model

For this project, we have used a deep-learning approach based on MuRIL architecture. [MuRIL (Multilingual Representations for Indian Languages)](https://huggingface.co/google/muril-base-cased) is a BERT model pre-trained on 17 Indian languages and their transliterated counterparts. This model uses a BERT base architecture pretrained from scratch using the Wikipedia, Common Crawl, PMINDIA and Dakshina corpora for 17 Indian languages that includes Nepali as one of the languages. The model is then fine-tuned on the Nepali Covid-19 tweets dataset for sentiment analysis.

