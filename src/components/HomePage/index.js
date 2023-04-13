import React, { useEffect, useState, useContext } from "react";
import Loader from "react-loader-spinner";
import Card from "../Card";
import Header from "../Header";
import "./index.css";
import AppContext from "../../context/AppContext";

const url = [
  {
    kind: "youtube#searchListResponse",
    etag: "RP9CNWPfjD-GnkFm2hXZgVt2aH0",
    nextPageToken: "CBkQAA",
    regionCode: "IN",
    pageInfo: {
      totalResults: 1000000,
      resultsPerPage: 25,
    },
    items: [
      {
        kind: "youtube#searchResult",
        etag: "2EvYRiUiFS6kMKDi6oXEmG4y91Q",
        id: {
          kind: "youtube#video",
          videoId: "y8w9kUvXo4c",
        },
        snippet: {
          publishedAt: "2023-04-11T01:55:55Z",
          channelId: "UChuLeaTGRcfzo0UjL-2qSbQ",
          title:
            "WATCH LIVE Rip Curl Pro Bells Beach Presented By Bonsoy - FINALS DAY",
          description:
            "Shop a limited run of official event merchandise from the Rip Curl Pro Bells Beach at: ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/y8w9kUvXo4c/default_live.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/y8w9kUvXo4c/mqdefault_live.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/y8w9kUvXo4c/hqdefault_live.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "World Surf League",
          liveBroadcastContent: "live",
          publishTime: "2023-04-11T01:55:55Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "zTUMflYCP1rzOMTH-rN6GoBUxMg",
        id: {
          kind: "youtube#video",
          videoId: "ZMqMvL0lXBc",
        },
        snippet: {
          publishedAt: "2023-04-11T02:44:23Z",
          channelId: "UChuLeaTGRcfzo0UjL-2qSbQ",
          title:
            "WATCH LIVE Rip Curl Pro Bells Beach Presented By Bonsoy - Finals Day Part 1",
          description:
            "Shop a limited run of official event merchandise from the Rip Curl Pro Bells Beach at: ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/ZMqMvL0lXBc/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/ZMqMvL0lXBc/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/ZMqMvL0lXBc/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "World Surf League",
          liveBroadcastContent: "none",
          publishTime: "2023-04-11T02:44:23Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "stV8lmX3zacNt-T5fc8-Tc1reSI",
        id: {
          kind: "youtube#video",
          videoId: "axu-v6ZBViQ",
        },
        snippet: {
          publishedAt: "2023-04-10T19:00:01Z",
          channelId: "UCo_q6aOlvPH7M-j_XGWVgXg",
          title: "HERES HOW YOU CAN SURF KELLY SLATERS WAVEPOOL",
          description:
            "STAY PSYCHED MERCHANDISE: https://staypsyched.com - JAMIE O'BRIEN SURF SCHOOL TURTLE BAY HAWAII ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/axu-v6ZBViQ/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/axu-v6ZBViQ/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/axu-v6ZBViQ/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Jamie O'Brien",
          liveBroadcastContent: "none",
          publishTime: "2023-04-10T19:00:01Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "pFb-wBknh-sg0AJPV88pGbsl4V8",
        id: {
          kind: "youtube#video",
          videoId: "kQdlqOyrlG8",
        },
        snippet: {
          publishedAt: "2023-04-11T00:09:16Z",
          channelId: "UChuLeaTGRcfzo0UjL-2qSbQ",
          title:
            "John John Florence vs Michael Rodrigues | Rip Curl Pro Bells Beach - Round of 16 Heat Replay",
          description:
            "Shop a limited run of official event merchandise from the Rip Curl Pro Bells Beach at: https://www.wslstore.com/collections/...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/kQdlqOyrlG8/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/kQdlqOyrlG8/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/kQdlqOyrlG8/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "World Surf League",
          liveBroadcastContent: "none",
          publishTime: "2023-04-11T00:09:16Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "WEQqNFVYpoEm8dK3eshq1nsEa_Y",
        id: {
          kind: "youtube#video",
          videoId: "H17i_5-ebrc",
        },
        snippet: {
          publishedAt: "2020-09-11T12:16:32Z",
          channelId: "UCeSRjhfeeqIgr--AcP9qhyg",
          title: "Largest wave surfed - Guinness World Records",
          description:
            "Subscribe to never miss a video! || https://gwr.co/YT-Sub Check out the GWR favourites! || http://gwr.co/YT-Favs ▷ Order Guinness ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/H17i_5-ebrc/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/H17i_5-ebrc/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/H17i_5-ebrc/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Guinness World Records",
          liveBroadcastContent: "none",
          publishTime: "2020-09-11T12:16:32Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "kL3mE5I0Jtw_Z_IwsU50GmasBw8",
        id: {
          kind: "youtube#video",
          videoId: "N4hZE_ojwgA",
        },
        snippet: {
          publishedAt: "2023-04-10T11:00:27Z",
          channelId: "UCzcQOTuXYGuCvTekySb_CeQ",
          title: "Arrive On Time To Get The Glass – Canggu",
          description:
            "An early low tide and light offshore were a gift for the early risers who had the best of it in Canggu a few days ago. The tide moved ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/N4hZE_ojwgA/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/N4hZE_ojwgA/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/N4hZE_ojwgA/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Surfers of Bali",
          liveBroadcastContent: "none",
          publishTime: "2023-04-10T11:00:27Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "GqTX3lHDu0RKyKzqBun7HuCA0Ds",
        id: {
          kind: "youtube#video",
          videoId: "lExhV00YiyE",
        },
        snippet: {
          publishedAt: "2023-04-11T04:52:02Z",
          channelId: "UChuLeaTGRcfzo0UjL-2qSbQ",
          title:
            "John John Florence vs Ryan Callinan | Rip Curl Pro Bells Beach - Semifinals Heat Replay",
          description:
            "Shop a limited run of official event merchandise from the Rip Curl Pro Bells Beach at: https://www.wslstore.com/collections/...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/lExhV00YiyE/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/lExhV00YiyE/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/lExhV00YiyE/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "World Surf League",
          liveBroadcastContent: "none",
          publishTime: "2023-04-11T04:52:02Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "5cW3j04W9geEPwIu803OYIjB6Rg",
        id: {
          kind: "youtube#video",
          videoId: "Xvs_GDxIb1E",
        },
        snippet: {
          publishedAt: "2021-02-25T16:15:47Z",
          channelId: "UCGeGhS_akOxBWQcSmje6B-w",
          title:
            "The Surfing community of Mulki, Karnataka! India&#39;s first surfing destination |  #TryingMyBest S01EP2",
          description:
            "Did you know, when you set out to learn something new, the process is much simpler when you join a group of a community?",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/Xvs_GDxIb1E/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/Xvs_GDxIb1E/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/Xvs_GDxIb1E/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Tanya Khanijow",
          liveBroadcastContent: "none",
          publishTime: "2021-02-25T16:15:47Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "xZ4nwrkzqY4aa1dtNw4z9vnZqms",
        id: {
          kind: "youtube#video",
          videoId: "ma67yOdMQfs",
        },
        snippet: {
          publishedAt: "2021-01-23T17:00:15Z",
          channelId: "UC--3c8RqSfAqYBdDjIG3UNA",
          title:
            "These Were The All-Time Surfing Moments Of The Year | Best Of 2020",
          description:
            "Well, that was a weird ride. Though it hasn't been easy, at least when we fixed our gaze on the ocean — or favorite place in the ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/ma67yOdMQfs/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/ma67yOdMQfs/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/ma67yOdMQfs/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Red Bull Surfing",
          liveBroadcastContent: "none",
          publishTime: "2021-01-23T17:00:15Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "OcwbOduxnyUVGybxngGWyVcvcUc",
        id: {
          kind: "youtube#video",
          videoId: "2UHUiIxc500",
        },
        snippet: {
          publishedAt: "2023-04-11T03:01:37Z",
          channelId: "UChuLeaTGRcfzo0UjL-2qSbQ",
          title:
            "Filipe Toledo vs Jackson Baker | Rip Curl Pro Bells Beach - Quarterfinals Heat Replay",
          description:
            "Shop a limited run of official event merchandise from the Rip Curl Pro Bells Beach at: https://www.wslstore.com/collections/...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/2UHUiIxc500/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/2UHUiIxc500/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/2UHUiIxc500/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "World Surf League",
          liveBroadcastContent: "none",
          publishTime: "2023-04-11T03:01:37Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "qdQ3uKysiSdhpGYUbWQLUOkB5LY",
        id: {
          kind: "youtube#video",
          videoId: "zZqxPozl2Ec",
        },
        snippet: {
          publishedAt: "2023-01-24T07:00:09Z",
          channelId: "UCEUYW6zm6KnUxPcwY1D8HsQ",
          title: "Surfing Massive Waves Waimea Bay (Jan 22, 2023)  4K",
          description:
            "What occurred on January 22, 2023, at Waimea Bay on the North Shore of Oahu is nothing short of historical. We're simply doing ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/zZqxPozl2Ec/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/zZqxPozl2Ec/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/zZqxPozl2Ec/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Eimy’s Hawaii Happy life 🏄🏻",
          liveBroadcastContent: "none",
          publishTime: "2023-01-24T07:00:09Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "YGEz59_CfYEwl8-MGIVDiOolPSw",
        id: {
          kind: "youtube#video",
          videoId: "Qtq8ZpGYidQ",
        },
        snippet: {
          publishedAt: "2023-04-10T05:22:23Z",
          channelId: "UChuLeaTGRcfzo0UjL-2qSbQ",
          title:
            "Mark Occhilupo vs Tom Curren | Heritage Heat - Rip Curl Pro Bells Beach",
          description:
            "The Rip Curl Pro Bells Beach was blessed with a Heritage Heat between legendary World Champs and rivals Mark Occhilupo ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/Qtq8ZpGYidQ/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/Qtq8ZpGYidQ/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/Qtq8ZpGYidQ/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "World Surf League",
          liveBroadcastContent: "none",
          publishTime: "2023-04-10T05:22:23Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "f1Fc94uJKvzXIojSmenFDP1ct_8",
        id: {
          kind: "youtube#video",
          videoId: "pmlzdeZuAk8",
        },
        snippet: {
          publishedAt: "2021-02-27T14:28:13Z",
          channelId: "UCxkIzPnPzWLz4IeuxIROflg",
          title: "What Surfing Is ACTUALLY Like as a Beginner",
          description:
            "See what it's actually like to surf as a beginner, including why it's fun and why it kind of sucks at times! Click below to join the ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/pmlzdeZuAk8/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/pmlzdeZuAk8/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/pmlzdeZuAk8/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Travis Marziani",
          liveBroadcastContent: "none",
          publishTime: "2021-02-27T14:28:13Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "106z15WDrrKiGVl3FXvuPrcEqwM",
        id: {
          kind: "youtube#video",
          videoId: "JLkMUvV3KNI",
        },
        snippet: {
          publishedAt: "2023-04-10T23:18:03Z",
          channelId: "UChuLeaTGRcfzo0UjL-2qSbQ",
          title:
            "Yago Dora vs Jackson Baker | Rip Curl Pro Bells Beach - Round of 16 Heat Replay",
          description:
            "Shop a limited run of official event merchandise from the Rip Curl Pro Bells Beach at: https://www.wslstore.com/collections/...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/JLkMUvV3KNI/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/JLkMUvV3KNI/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/JLkMUvV3KNI/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "World Surf League",
          liveBroadcastContent: "none",
          publishTime: "2023-04-10T23:18:03Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "BN0o3fMNk533NyXTB_8p7GvWnwU",
        id: {
          kind: "youtube#video",
          videoId: "eSWST13stO4",
        },
        snippet: {
          publishedAt: "2022-03-27T15:00:32Z",
          channelId: "UCVo06dBGK9VBBhq15wJxZHQ",
          title:
            "🔵4k (ASMR) 10 Hour Store Loop - Hawaii Surfing - With Relaxing Music☑️",
          description:
            "Waves of the World Filmers: Chris Kincade: https://www.instagram.com/chriskincade.wotw Andre Botha: ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/eSWST13stO4/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/eSWST13stO4/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/eSWST13stO4/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Waves of the World",
          liveBroadcastContent: "none",
          publishTime: "2022-03-27T15:00:32Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "O3qAjTUPPN6n5sBLsEQHnnVPSFY",
        id: {
          kind: "youtube#video",
          videoId: "xtHZKToMvus",
        },
        snippet: {
          publishedAt: "2022-11-02T17:46:49Z",
          channelId: "UCTYHNSWYy4jCSCj1Q1Fq0ew",
          title:
            "Interlusion | A Billabong Surf Film Shot in the Mentawai Islands",
          description:
            "Welcome to the Interlusion. What happens when the best surf trip of former world champ Joel Parkinson's life happens years after ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/xtHZKToMvus/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/xtHZKToMvus/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/xtHZKToMvus/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Billabong",
          liveBroadcastContent: "none",
          publishTime: "2022-11-02T17:46:49Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "KoA__k7E1RUYzBVIbQ0N7rjjBMQ",
        id: {
          kind: "youtube#video",
          videoId: "j1AQ_s-y52M",
        },
        snippet: {
          publishedAt: "2022-07-16T19:00:13Z",
          channelId: "UCvOh9i-BOFzu51rpj33fGag",
          title:
            "7 tips to transition from beginner to intermediate | How to Surf",
          description:
            "In this video, we break down our 7 best tips on how to transition from Beginner to Intermediate faster. 00:00 Intro 00:24 Surf The ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/j1AQ_s-y52M/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/j1AQ_s-y52M/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/j1AQ_s-y52M/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Barefoot Surf",
          liveBroadcastContent: "none",
          publishTime: "2022-07-16T19:00:13Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "a0FkWr2HrpwsU6nYJjlWH6HJ8UU",
        id: {
          kind: "youtube#video",
          videoId: "Up5LE7KO9AM",
        },
        snippet: {
          publishedAt: "2023-04-10T06:55:41Z",
          channelId: "UChuLeaTGRcfzo0UjL-2qSbQ",
          title:
            "World Champs, Yellow Leader Jersey, Rising Stars All Scramble For Finals Day Draw | Post Show Day 3",
          description:
            "Matthew McGillivray spoiled João Chianca's Yellow Jersey dreams, buzzer-beater thrillers from World No. 1 Molly Picklum and ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/Up5LE7KO9AM/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/Up5LE7KO9AM/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/Up5LE7KO9AM/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "World Surf League",
          liveBroadcastContent: "none",
          publishTime: "2023-04-10T06:55:41Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "nBUww5Gso9qQfTN4kzmdUKpL0ec",
        id: {
          kind: "youtube#video",
          videoId: "vY91wUhR-fE",
        },
        snippet: {
          publishedAt: "2022-12-14T15:00:36Z",
          channelId: "UCQ5kqUO7Pkc7YWRNnjetfbw",
          title: "That’s NOT Surfing?!",
          description: "",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/vY91wUhR-fE/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/vY91wUhR-fE/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/vY91wUhR-fE/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Skid Kids",
          liveBroadcastContent: "none",
          publishTime: "2022-12-14T15:00:36Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "O13GAG7P4Zol3xLk7sHszFxuVuM",
        id: {
          kind: "youtube#video",
          videoId: "kFjETSa9N7A",
        },
        snippet: {
          publishedAt: "2015-07-22T18:30:01Z",
          channelId: "UC--3c8RqSfAqYBdDjIG3UNA",
          title: "Indian Ocean Mega Swell Hits Australia | Filmers @ Large",
          description:
            "Subscribe to our new Red Bull Surfing channel: https://win.gs/SubToRedBullSurfing The Indian Ocean's swell of the century hit ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/kFjETSa9N7A/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/kFjETSa9N7A/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/kFjETSa9N7A/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Red Bull Surfing",
          liveBroadcastContent: "none",
          publishTime: "2015-07-22T18:30:01Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "cWyC28PKaTZbvFnPbkVvHoMuyww",
        id: {
          kind: "youtube#video",
          videoId: "FUFH9J4NJy0",
        },
        snippet: {
          publishedAt: "2023-04-10T07:16:38Z",
          channelId: "UChuLeaTGRcfzo0UjL-2qSbQ",
          title:
            "WATCH LIVE Rip Curl Pro Bells Beach Presented By Bonsoy - Day 3",
          description:
            "Shop a limited run of official event merchandise from the Rip Curl Pro Bells Beach at: ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/FUFH9J4NJy0/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/FUFH9J4NJy0/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/FUFH9J4NJy0/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "World Surf League",
          liveBroadcastContent: "none",
          publishTime: "2023-04-10T07:16:38Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "RdHiFp583ZB1ueL4hruRSVBikPE",
        id: {
          kind: "youtube#video",
          videoId: "lUL9peNLkhI",
        },
        snippet: {
          publishedAt: "2020-08-06T09:47:22Z",
          channelId: "UCSiDGb0MnHFGjs4E2WKvShw",
          title: "Water Surfing With देसी जुगाड़ - Flying On Water",
          description: "100% Working Desi Jugad For Having Fun.",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/lUL9peNLkhI/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/lUL9peNLkhI/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/lUL9peNLkhI/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "MR. INDIAN HACKER",
          liveBroadcastContent: "none",
          publishTime: "2020-08-06T09:47:22Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "jkvVBUSWY__3aWAfmFVwSWu74Gw",
        id: {
          kind: "youtube#video",
          videoId: "4g6xaSDKnG8",
        },
        snippet: {
          publishedAt: "2023-04-10T22:43:11Z",
          channelId: "UChuLeaTGRcfzo0UjL-2qSbQ",
          title:
            "Ethan Ewing vs Gabriel Medina | Rip Curl Pro Bells Beach - Round of 16 Heat Replay",
          description:
            "Shop a limited run of official event merchandise from the Rip Curl Pro Bells Beach at: https://www.wslstore.com/collections/...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/4g6xaSDKnG8/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/4g6xaSDKnG8/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/4g6xaSDKnG8/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "World Surf League",
          liveBroadcastContent: "none",
          publishTime: "2023-04-10T22:43:11Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "cDTpIHGChugzlcwS07TL8Zaoc8I",
        id: {
          kind: "youtube#video",
          videoId: "hbn_gqh5IIY",
        },
        snippet: {
          publishedAt: "2023-04-10T20:32:22Z",
          channelId: "UChuLeaTGRcfzo0UjL-2qSbQ",
          title:
            "ASSISTA AO VIVO Rip Curl Pro Bells Beach presented by Bonsoy - Dia de Finais Parte 1",
          description:
            "Faça suas compras na WSL Store, a Loja Oficial da WSL Brasil! - https://www.wslstore.com.br/ Bells Beach significa herança do ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/hbn_gqh5IIY/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/hbn_gqh5IIY/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/hbn_gqh5IIY/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "World Surf League",
          liveBroadcastContent: "none",
          publishTime: "2023-04-10T20:32:22Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "sqN9fjPp1ZkyCLWrZV3exYj5hyQ",
        id: {
          kind: "youtube#video",
          videoId: "b7Pl5Rr8ZYk",
        },
        snippet: {
          publishedAt: "2023-02-01T19:14:10Z",
          channelId: "UC--3c8RqSfAqYBdDjIG3UNA",
          title: "The BEST of Surfing in 2022",
          description:
            "What a year. 2022 was packed to the gills with everything the surfing world has to offer. Whether it be seemingly endless historic ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/b7Pl5Rr8ZYk/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/b7Pl5Rr8ZYk/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/b7Pl5Rr8ZYk/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Red Bull Surfing",
          liveBroadcastContent: "none",
          publishTime: "2023-02-01T19:14:10Z",
        },
      },
    ],
  },
];

const HomePage = () => {
  const [videoList, setVideoList] = useState(url[0]);
  const [apiStaus, setApiStaus] = useState(false);
  // use context for global store
  const { searchInput, dropDownList } = useContext(AppContext);
  

  const updatedVideoList = videoList.items.map((eachItem) => {
    const obj = {
      thumbnailUrl: eachItem.snippet.thumbnails.high.url,
      title: eachItem.snippet.title,
      channelId: eachItem.snippet.channelId,
      publishedAt: eachItem.snippet.publishedAt,
      videoId: eachItem.id.videoId,
      channelTitle: eachItem.snippet.channelTitle,
    };
    return obj;
  });
  const filterdList = updatedVideoList.filter((eachItem) => {
    return eachItem.title.toLowerCase().includes(searchInput.toLowerCase());
  });

  const SetFilteredData = () => {
    console.log("PRINT");
    dropDownList(filterdList);
  };

  

  useEffect(() => {
    setApiStaus(true);
    const getVideoList = () => {
      setVideoList(url[0]);
    };
    getVideoList();
    SetFilteredData();
  },[]);

  //setFilteredTitleList(...filterdList)

  // const loadingView = () => (
//   <div className="spinner-container">
//       <Loader type="ThreeDots" color={"#123abc"}/>
//   </div>)

const failureView = () => (
  <div className="failure-view-container">
    <h1 className="failure-view-text">Something Went Wrong!</h1>
    <button className="retry-btn">Retry</button>
  </div>
)

const successView = () => (<div className="home-card-container">
<ul className="cards-container">
  {filterdList &&
    filterdList.map((eachObj) => (
      <Card cardDetails={eachObj} key={eachObj.videoId} />
    ))}
</ul>
</div>)

  return (
    <div className="home-container">
      <Header />
      {/* <div className="home-card-container">
        <ul className="cards-container">
          {filterdList &&
            filterdList.map((eachObj) => (
              <Card cardDetails={eachObj} key={eachObj.videoId} />
            ))}
        </ul>
      </div> */}
      {!apiStaus ? failureView (): successView()}
    </div>
  );
};

export default HomePage;


