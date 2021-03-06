import React, { useRef, useEffect } from 'react';
import AWS from 'aws-sdk';
import Entity from './entity/entity';
import ActionScripter from './actionScripter';
import LexAudio from './lex/lex-audio';
import eventHandler from './eventHandler';
import appConfig from '../app-config';


AWS.config.credentials = new AWS.Credentials(appConfig.aws_iam_key, appConfig.aws_iam_secret, null);
AWS.config.region = appConfig.aws_region;

export const Delta = ({name, message}) =>  {
  const canvasRef = useRef(null);
  const cnvStyle = {
    backgroundColor: 'black'
  }  
  const config = {
    lexConfig: LexAudio.Session({ botName: name })
  }
  const conversation = new LexAudio.Conversation(config, onStateChange, onSuccess, onError, onAudioData);

  useEffect(() => {
    conversation.sendText(message);
  }, [message]);

  useEffect(() => {    
    Entity.init(canvasRef, entityEvent);
    Entity.isInteractive(false);
    ActionScripter.Actions = Entity.renderList;  

    // initial Intro or Welcome message 
    if(localStorage.getItem(`noReplay-intro`) !== null){
      enableInteraction();
      conversation.elicitIntent('Welcome', 'Delegate');
    } else {
      ActionScripter.start("intro", enableInteraction);
      setTimeout(() => conversation.elicitIntent('Intro', 'Delegate'), 2000);
    }

    eventHandler.on('MicBtn', () => conversation.advanceConversation());
    eventHandler.on('Listening', () => Entity.menu.onRecord());
    eventHandler.on('Sending', () => Entity.menu.onStop());
    eventHandler.on('SettingsBtn', () => eventHandler.emit('SettingsMenu', deltaSettings));

  }, []);

  const enableInteraction = () => {
    Entity.isInteractive(true);
    ActionScripter.start("interact");
  }

  function entityEvent(evt) {
    eventHandler.emit(evt.name);
  }

  function onStateChange(state) {
    eventHandler.emit(state);
  }

  function onError(error) {
    eventHandler.emit('onError', error);
    console.log(error);
  }

  function onAudioData(timeDomain, bufferLength) {
    Entity.setVoiceBuffer(timeDomain, bufferLength);
  }

  function onSuccess(data){
    eventHandler.emit('onSuccess', data);
    //console.log('Transcript: ', data.inputTranscript, ", Response: ", data.message);
  }

  const deltaSettings = {
    ToggleEntity: () => {Entity.toggleBody(); Entity.toggleEye(); },
    ToggleVoiceVisual: () => Entity.toggleVoiceVisual()
  }
  
  return (<canvas ref={canvasRef} id="cnv" style={cnvStyle}>Your browser does not support the HTML canvas tag.</canvas>);

}

export let Events = eventHandler;
export default Delta;