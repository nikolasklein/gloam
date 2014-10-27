<?php

header('Content-disposition: attachment; filename=sonnenaufgang-sonnenuntergang.csv');
header('Content-type: text/csv');

if (isset($_GET["year"])) $year=(int)$_GET["year"]; else $year=(int)date("Y");
if (isset($_GET["month"])) $month=(int)$_GET["month"]; else $month=(int)date("m");
if (isset($_GET["longitude"])) $longitude=$_GET["longitude"]; else $longitude=7;
$longitude = ereg_replace(',','.',$longitude);
if (isset($_GET["latitude"])) $latitude=$_GET["latitude"]; else $latitude=52;
$latitude = ereg_replace(',','.',$latitude);
if (isset($_GET["location"])) $loc=$_GET["location"]; else $loc='XYZ';
if (strlen($loc) < 1) $loc='XYZ';
if (isset($_GET["client"])) $client=$_GET["client"]; else $client="x";
if (isset($_GET["offsett"])) $offsett=$_GET["offsett"]; else $offsett=0;
if (isset($_GET["zenith"])) $zenith=$_GET["zenith"]; else $zenith=90+50/60;
if (isset($_GET["nodst"])) $nodst=$_GET["nodst"]; else $nodst="FALSE";

$loc = ereg_replace(' ','_',$loc);
$loc = ereg_replace('-','_',$loc);
$tdiff=$offsett*3600;

if ($client == "5mQNicMv2c") {
 for ($d=1; $d<=366; $d++) {
     //if (!checkdate($month,$d,$year)) {
      //   break;
       //  }

     $date=mktime(0,0,0,$month,$d,$year);
     $dfday=strftime("%d.%m.%Y",$date);
     $ctime=gmmktime(0,0,0,$month,$d,$year); //current time
     $sunrise=date_sunrise($ctime, SUNFUNCS_RET_TIMESTAMP, $latitude,$longitude,$zenith);
     $sunset=date_sunset($ctime, SUNFUNCS_RET_TIMESTAMP, $latitude,$longitude,$zenith);
//Test, if no insolation...
     $night = FALSE;
     $nosunriseset = FALSE;
     if ($sunrise == FALSE OR $sunset == FALSE) {
        $nosunriseset = TRUE;
        if (in_array($month,range(4,9)) && $latitude < 0) { $night = TRUE; }
        if (in_array($month,array(10,11,12,1,2,3)) && $latitude > 0) { $night = TRUE; }
         }
     $sunrise=$sunrise+$tdiff;
     $sunset=$sunset+$tdiff;
     $ddiff = $sunset - $sunrise - 3600;
     if(!$night AND $nosunriseset){
        $dx="24:00";
        }
     elseif($night AND $nosunriseset){
        $dx="00:00";
        }
     else{
        $dx=date("H:i",$ddiff);
        }
     $dst = "TRUE";
     if( ( ( (int)date("O",$sunrise) )/100) == 1 ){
         $dst = "FALSE";
         }
     if (($nodst == "TRUE") AND ($dst == "TRUE")){
          $sunrise=$sunrise-3600;
          $sunset=$sunset-3600;
          }
     //echo("$dfday;$loc;");
     echo(date("H:i",($sunrise)) . ";" . date("H:i",($sunset)) . "\n");
//     echo($nosunriseset?" ;" . $dx . "; " . $dst . "\n":date("H:i",($sunset)) . "\n");
     }
}
else echo " ";
 ?>
