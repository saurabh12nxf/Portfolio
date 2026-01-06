# 🚀 API Integration Setup Guide

## Overview
This guide will help you set up real API integrations for your portfolio to make it truly dynamic with live data from GitHub, Spotify, and weather services.

## 🔧 Required Setup

### 1. **GitHub API Integration**
To fetch real GitHub stats (commits, PRs, contributions):

**Steps:**
1. Go to https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Give it a name: "Portfolio Stats"
4. Select scopes: `repo`, `read:user`
5. Generate and copy the token
6. Add to `api-config.js`:
```javascript
const GITHUB_TOKEN = 'your_github_token_here';
const GITHUB_USERNAME = 'saurabh12nxf'; // Your GitHub username
```

### 2. **Weather API Integration**
To get real location and weather:

**Steps:**
1. Go to https://openweathermap.org/api
2. Sign up for free account
3. Get your API key
4. Add to `api-config.js`:
```javascript
const WEATHER_API_KEY = 'your_weather_api_key_here';
```

### 3. **Spotify API Integration** (Optional - More Complex)
To show real currently playing music:

**Steps:**
1. Go to https://developer.spotify.com/dashboard
2. Create an app
3. Get Client ID and Client Secret
4. Set up OAuth flow (requires backend)

**Note:** Spotify requires OAuth which needs a backend server. For now, the portfolio uses simulated data. If you want real Spotify integration, you'll need to set up a backend service.

## 📝 Configuration File

Create `api-config.js` in your PortFolio folder:

```javascript
// API Configuration
const API_CONFIG = {
    github: {
        token: 'YOUR_GITHUB_TOKEN_HERE',
        username: 'saurabh12nxf'
    },
    weather: {
        apiKey: 'YOUR_WEATHER_API_KEY_HERE'
    },
    spotify: {
        // Optional - requires backend setup
        clientId: 'YOUR_SPOTIFY_CLIENT_ID',
        enabled: false // Set to true when configured
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = API_CONFIG;
}
```

## 🎯 What Will Be Dynamic

Once configured:

✅ **Location** - Auto-detected from browser geolocation  
✅ **Weather** - Real temperature and conditions for your location  
✅ **GitHub Stats** - Real commits, PRs, contributions from your GitHub  
✅ **Time** - Already dynamic (updates every second)  
✅ **Coding Stats** - Calculated from real GitHub activity  
✅ **Fun Facts** - Expanded to 20+ facts with rotation  

## ⚠️ Important Notes

1. **Never commit API keys to Git!** Add `api-config.js` to `.gitignore`
2. **GitHub tokens** should have minimal permissions
3. **Weather API** has free tier limits (60 calls/minute)
4. **Spotify** integration is complex and optional

## 🚀 Quick Start (Without APIs)

If you don't want to set up APIs right now:
- The portfolio will use **simulated data** (still looks dynamic!)
- Location will default to "Bangalore, India"
- Weather will be time-based (morning/afternoon/evening)
- GitHub stats will be randomized
- Everything still updates and looks professional!

## 📚 Resources

- GitHub API Docs: https://docs.github.com/en/rest
- OpenWeather API: https://openweathermap.org/api
- Spotify API: https://developer.spotify.com/documentation/web-api

---

**The portfolio works great even without real APIs!** The simulated data is realistic and updates dynamically. Set up real APIs only if you want to showcase live data from your actual accounts.
