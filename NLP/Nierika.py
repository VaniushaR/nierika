# NLP from Nierkia database corpus compilation
# Author: Vania Ramírez
# Date: september 2019
from nltk.tokenize import RegexpTokenizer
from nltk.tokenize import sent_tokenize
import json

# Function to merge each language lists into one:


def countList(lst1, lst2):
    return [sub[item] for item in range(len(lst1))
            for sub in [lst1, lst2]]


#  Tokenization by word and removing all the spaces between words

# words_original_Language = tokenizer.tokenize(
#     'On Tlatoani iwan Ichpoch. Sen Tlatoani kipiyaya sen ichpoch yejwan kinekiya nonamiktis, niman yejwa xkimatiya akinon iwan.On Tlatoani okinminots nochimej on telpokamej yejwan chanejkej ompa para yejwa ma kitlapejpeni yejwan kwelitas.Niman kemaj miyekej onosentlalikej, niman yejwa xkimatiya akinon iwan nemis.')


# Tokenization by sentences
original_Language = 'On Tlatoani iwan Ichpoch. Sen Tlatoani kipiyaya sen ichpoch yejwan kinekiya nonamiktis, niman yejwa xkimatiya akinon iwan. On Tlatoani okinminots nochimej on telpokamej yejwan chanejkej ompa para yejwa ma kitlapejpeni yejwan kwelitas. Niman kemaj miyekej onosentlalikej, niman yejwa xkimatiya akinon iwan nemis.'

spanish_translation = 'El rey y su hija. Un rey tenía una hija que quería casarse, pero ella no sabía con quién. El rey llamó a todos los jóvenes del pueblo para que ella escogiera al que más le gustara. Luego, vinieron muchos jóvenes, pero ella no sabía con quién casarse.'

tokenizer = RegexpTokenizer(r'\w+')
tokenized_originalLang = sent_tokenize(original_Language)
tokenized_spanishTrans = sent_tokenize(spanish_translation)
# join one by one sentences:
#print(' SENTENCES >>>>>>>' + str(tokenized_originalLang) + '////')
#print(' SENTENCES >>>>>>>' + str(tokenized_spanishTrans) + '////')
#print(countList(tokenized_originalLang, tokenized_spanishTrans))
bilingual = countList(tokenized_originalLang, tokenized_spanishTrans)
# print(bilingual)

print(json.dumps(bilingual))
jsonBilingual = json.dumps(bilingual)
print(type(jsonBilingual))
print(jsonBilingual)


# Tokenization by words was not the best solution.
words_original_Language = tokenizer.tokenize(original_Language)
words_spanish_translation = tokenizer.tokenize(spanish_translation)
#print('PALABRAS' + str(words_original_Language))
#print('PALABRAS ESPAÑOLAS' + str(words_spanish_translation))
#print(countList(words_original_Language, words_spanish_translation))
