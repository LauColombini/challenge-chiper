import React,{ useEffect, useState } from "react"
import request from "../api/redditAPI"

export const useRedits = (url) => {
  const [state,setState] = useState({
    redits: [],
    loading: true
  })
  const apiRequest = async () => {
    const response = await request.get(url);
    if(response){
      setState({
        redits: response.data.data.children,
        loading: false
      })
    }else{
      let contador = 0
      setState({
        redits: [],
        loading: true
      })      
      contador += 1
      if(contador < 4) apiRequest()
    }
  };

  useEffect(() => {
    apiRequest();
  }, []);

  return {
    redits : state.redits,
    isLoading: state.loading,
  }
}