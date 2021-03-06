import { requestArticles, requestSingles, requestVols } from "./cgi";
import * as vol from "../db/vol";
import * as volTrack from "../db/vol-track";
import * as single from "../db/single";
import * as article from "../db/article";
import * as articleTrack from "../db/article-track";
import {
  login,
  logout,
  getUserInfo,
  getUserSetting,
  getUserLikedVolIds,
  getUserLikedArticleIds,
  getUserLikedTrackIds,
  fetchAndSaveLikedVols,
  fetchAndSaveLikedTracks,
  fetchAndSaveLikedArticles,
  likeVol,
  likeArticle,
  likeTrack,
    unlikeVol,
    unlikeArticle,
    unlikeTrack
} from "../user";

function injectIPC(target: object): void {
  Object.defineProperty(target, "ipc", {
    value: {
      user: {
        login,
        logout,
        getUserInfo,
        getUserSetting,
        getUserLikedVolIds,
        getUserLikedArticleIds,
        getUserLikedTrackIds,
        fetchAndSaveLikedVols,
        fetchAndSaveLikedTracks,
        fetchAndSaveLikedArticles,
        likeVol,
        likeArticle,
        likeTrack,
        unlikeVol,
        unlikeArticle,
        unlikeTrack
      },
      request: {
        requestVols,
        requestSingles,
        requestArticles
      },
      db: {
        vol: {
          count: vol.count,
          findOne: vol.findOne,
          find: vol.find,
          insert: vol.insert,
          latestID: vol.latestID
        },
        volTrack: {
          findOne: volTrack.findOne,
          find: volTrack.find
        },
        single: {
          count: single.count,
          findOne: single.findOne,
          find: single.find,
          insert: single.insert,
          latestID: single.latestID
        },
        article: {
          count: article.count,
          findOne: article.findOne,
          find: article.find,
          insert: article.insert,
          latestID: article.latestID
        },
        articleTrack: {
          findOne: articleTrack.findOne,
          find: articleTrack.find
        }
      }
    }
  });
}

export { injectIPC };
