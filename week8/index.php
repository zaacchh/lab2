<?php
// Lesson 2: Variables
// Declare variables to store profile information
$name = "Zach Luis Sujide";
$age = 22;
$jobTitle = "Asia Pacific College Student";

// Lesson 3: Echo / Print
// Print profile information
echo "<h1>$name</h1>";
echo "<h2>$jobTitle</h2>";

// Lesson 4: Data Types
// Use different data types
$isStudent = true;
$skills = array("HTML", "CSS", "JavaScript", "PHP", "Dart");

// Lesson 5: Operators & Math
// Perform a simple calculation
$birthYear = 2002;
$currentYear = date("Y");
$age = $currentYear - $birthYear;
echo "Age: " . $age;
