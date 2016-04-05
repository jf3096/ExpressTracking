Express Tracking
===========================
Introduction
-------------------------------------
The purpose of this is used to simply fetch express information from [www.kuaidi100.com](http://www.kuaidi100.com) via Node Express. The logic behind is simple which requires two step.

<strong>Requirement: Express tracking number (快递号)</strong>

Step 1: The logic behind will first send a request to determine what company the tracking number is from.

Step 2: Once the company type is determined, another request performs. According to study, [www.kuaidi100.com](http://www.kuaidi100.com) requires a <strong>User-Agent</strong> in Http request header for statistic purpose I suppose. 
Therefore, a simulate header has written in source code. 

How to use
-------------------------------------
Simply, as following

```bash
npm install
```
After, just run server.js with following command. The number 881443775034378914 should be your Express tracking number (快递号).

```bash
node server.js
http://localhost:8080/?text=881443775034378914
```

![](https://github.com/jf3096/ExpressTracking/raw/master/res/error.png)  
![](https://github.com/jf3096/ExpressTracking/raw/master/res/success.png)  