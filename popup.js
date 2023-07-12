document.addEventListener("DOMContentLoaded", function() {
/*
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // Handle the message received from the content script
  console.log('Message received in the background script:', message);

  // Send a response back to the content script if needed
  sendResponse('Message received successfully!');
});
*/

document.getElementById("setg").addEventListener("click", async function() {
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  tabs.forEach((tab) => {
    console.log("sending")
    chrome.tabs.sendMessage(tab.id,'setg', (response) => {
      // Handle the response from the content script
      console.log('Response from the content script:', response);
    });
  });
});
})


/*
document.getElementById("contact").addEventListener("click", async function() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    tabs.forEach((tab) => {
      console.log("sending")
      chrome.tabs.sendMessage(tab.id,'remg', (response) => {
        // Handle the response from the content script
        console.log('Response from the content script:', response);
      });
    });
  });
  })*/

  document.getElementById("searchm").addEventListener("click", async function() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      tabs.forEach((tab) => {
        console.log("sending")
        chrome.tabs.sendMessage(tab.id,'searchm', (response) => {
          // Handle the response from the content script
          console.log('Response from the content script:', response);
        });
      });
    });
    })

    document.getElementById("solve").addEventListener("click", async function() {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        tabs.forEach((tab) => {
          console.log("sending")
          chrome.tabs.sendMessage(tab.id,'solve', (response) => {
            // Handle the response from the content script
            console.log('Response from the content script:', response);
          });
        });
      });
      })

      document.getElementById("search").addEventListener("click", async function() {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          tabs.forEach((tab) => {
            console.log("sending")
            chrome.tabs.sendMessage(tab.id,'search', (response) => {
              // Handle the response from the content script
              console.log('Response from the content script:', response);
            });
          });
        });
        })

        document.getElementById("punch").addEventListener("click", async function() {
          chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            tabs.forEach((tab) => {
              console.log("sending")
              chrome.tabs.sendMessage(tab.id,'punch', (response) => {
                // Handle the response from the content script
                console.log('Response from the content script:', response);
              });
            });
          });
          })

          document.getElementById("all").addEventListener("click", async function() {
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
              tabs.forEach((tab) => {
                console.log("sending")
                chrome.tabs.sendMessage(tab.id,'all', (response) => {
                  // Handle the response from the content script
                  console.log('Response from the content script:', response);
                });
              });
            });
            })

document.getElementById("contact").addEventListener("click", async function() {
  console.log("sent")
chrome.runtime.sendMessage("change UA to mobile");

  })

}) 