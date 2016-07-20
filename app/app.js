"use strict";
var app = angular.module("music-history", []);

app.controller("masterController",function($scope){
  $scope.songView=true;
	$scope.songList=[
    {Album:"Collection of songs",
    Artist:"A singer",
    Title:"A song",
    Genre:"Rock"}
    ];
  $scope.showAddView=function(){
      $scope.songView=false;
  };
  $scope.showListView=function(){
      $scope.songView=true;
    };
    $scope.addNewSong=function(){
      $scope.songList.push($scope.newSong);
      $scope.newSong={};
    };
});
