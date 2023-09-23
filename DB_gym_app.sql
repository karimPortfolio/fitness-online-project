-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 21, 2023 at 10:25 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `DB_gym_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `coaches`
--

CREATE TABLE `coaches` (
  `id` bigint(20) NOT NULL,
  `name` varchar(100) NOT NULL,
  `role` varchar(100) NOT NULL,
  `experience` int(11) NOT NULL,
  `image` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `coaches`
--

INSERT INTO `coaches` (`id`, `name`, `role`, `experience`, `image`) VALUES
(1, 'Lucie Mylee', 'Professional fitness coach', 7, 'lucie-mylee.png'),
(2, 'Abbie Conrad', 'Professional fitness coach', 10, 'abbie-conrad.png'),
(3, 'Savanna Weiss', 'Professional boxing coash', 8, 'savanna-weiss.png'),
(4, 'Nathalia Andersen', 'Professional yoga coash', 12, 'nathalia-andersen.png\r\n');

-- --------------------------------------------------------

--
-- Table structure for table `programs`
--

CREATE TABLE `programs` (
  `id` bigint(20) NOT NULL,
  `programme` varchar(255) NOT NULL,
  `coach_id` bigint(20) NOT NULL,
  `videos` int(11) NOT NULL,
  `weeks` int(11) NOT NULL,
  `trainers` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `description` text NOT NULL,
  `background` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `programs`
--

INSERT INTO `programs` (`id`, `programme`, `coach_id`, `videos`, `weeks`, `trainers`, `image`, `description`, `background`) VALUES
(1, 'Basic Foundations', 2, 20, 10, 200, 'section1_card1.png', 'Basic Foundations program for beginners trains your body for everyday activities and makes daily motion easier and safer. Power Abbie will help you conquer movements necessary in the real world—squatting, pulling, pushing, bending and twisting. Each of the 10 workouts in this series builds upon the next to increase your muscular strength and endurance. Dive right in!', '#ac1690'),
(2, 'Full-body Boost', 1, 40, 20, 90, 'section1_card2.png', 'Add a new dimension to your training by hitting those dumbbells. Body Boost is a full-body dumbbell program that has just the right amount of volume to promote lean muscle growth and is perfect to do at home or on-the-go. That\'s not all! Prepare to burn some massive calories as you shape and tone your entire body. Get ready to increase your strength and improve your bone health in just 20 weeks', '#ff59a9'),
(3, 'Triple Strength', 2, 30, 12, 50, 'section1_card3.png', 'Go ahead! Grab your dumbbells and get ready to improve your total-body strength and cardiovascular endurance. Enjoy motivating split training sessions that will tax your muscles to their max. Over the course of this intense 12-week program, you\'ll build lean muscles as you constantly push your limits. You\'ll be guided every step of the way by expert trainers who will help you reach your full potential and get the results you want.', '#5990ff'),
(4, 'Intro to Boxing', 3, 14, 6, 50, 'boxing-program.png', 'Calling all champions. Time to let the punches fly as Alison and Dany lead you through beginner boxing and bodyweight intervals to sculpt and tone. In this 3 x 2-week program, you\'ll gain full access to 10 cardio-infused boxing workouts to get your heart rate pumping. You\'ll love these quick and unique routines that are sure to leave you sweaty and empowered.', '#b37bfb'),
(5, 'Stronger Back', 1, 30, 12, 90, 'back-program.png', 'Whether you want to get rid of annoying back pain or need preventative exercises, \"Stronger Back\" is right for you. \"Stronger Back\" strengthens your entire back and shoulder muscles, plus provides you with phenomenal core training. You\'ll soon be on your way to better posture, toned shoulders and a flat tummy. Start now!', '#ff9767'),
(6, 'Yoga Foundations\r\n', 4, 25, 10, 300, 'yoga-program.png', 'New to yoga? This is a perfect place to start. \"Yoga Foundations\" is designed to strengthen and stretch your entire body with flowing yoga sessions. Your dedicated yoga instructor will carefully guide you through each asana movement. Leave each yoga workout feeling calm and more centered.', '#feca30');

-- --------------------------------------------------------

--
-- Table structure for table `recipes`
--

CREATE TABLE `recipes` (
  `id` int(11) NOT NULL,
  `recipe` varchar(255) NOT NULL,
  `ingredients` text NOT NULL,
  `preparation` text NOT NULL,
  `benefits` text NOT NULL,
  `time` int(11) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `recipes`
--

INSERT INTO `recipes` (`id`, `recipe`, `ingredients`, `preparation`, `benefits`, `time`, `image`) VALUES
(1, 'Chicken Stir-Fry', '2 boneless, skinless chicken breasts; 1 red bell pepper; 1 green bell pepper; 1 cup broccoli florets; 1/2 cup snap peas; 1/4 cup soy sauce; 2 tablespoons vegetable oil; 2 cloves garlic, minced; 1 teaspoon ginger, minced; 1 tablespoon cornstarch; Salt and pepper to taste', '1. Cut the chicken breasts into bite-sized pieces.\n2. In a large skillet, heat the vegetable oil over medium-high heat.\n3. Add the minced garlic and ginger, and sauté for about 1 minute.\n4. Add the chicken pieces and cook until they are no longer pink in the center.\n5. Add the vegetables and continue to cook for another 3-4 minutes until they are tender.\n6. In a small bowl, mix the soy sauce and cornstarch until well combined.\n7. Pour the soy sauce mixture over the chicken and vegetables, and stir well.\n8. Cook for an additional 2-3 minutes until the sauce thickens.\n9. Season with salt and pepper to taste.\n10. Serve hot and enjoy!', 'This chicken stir-fry is a delicious and healthy meal option. It is packed with protein from the chicken and a variety of colorful vegetables. The ginger and garlic add a wonderful flavor, and the soy sauce gives it that classic stir-fry taste. This dish is also low in calories and a good source of vitamins and minerals.', 60, 'chicken-stirs-fry.jpeg'),
(2, 'Spaghetti Bolognese', 'Ground beef; onion; garlic; tomato sauce; red wine; spaghetti pasta; olive oil; salt; pepper; grated Parmesan cheese', '1. Brown the ground beef with chopped onion and garlic in olive oil.\n2. Add tomato sauce and red wine, simmer.\n3. Cook spaghetti according to package instructions.\n4. Serve the sauce over cooked spaghetti, garnish with Parmesan cheese.', 'A hearty and delicious pasta dish that\'s rich in protein and flavors.', 30, 'spaghetti_bolognese.jpeg'),
(3, 'Chicken Parmesan', '4 boneless, skinless chicken breasts; 1 cup breadcrumbs; 1 cup grated Parmesan cheese; 1 cup marinara sauce; 1 cup mozzarella cheese; 2 tablespoons olive oil; 2 cloves garlic, minced; Salt and pepper to taste', '1. Preheat the oven to 375°F (190°C).\n2. Season the chicken breasts with salt and pepper.\n3. In a bowl, mix breadcrumbs and grated Parmesan cheese.\n4. Dip each chicken breast in the breadcrumb mixture to coat it evenly.\n5. Heat olive oil in a skillet over medium-high heat. Add minced garlic and cook until fragrant.\n6. Add the breaded chicken breasts and cook for about 2-3 minutes on each side until golden brown.\n7. In a baking dish, spread marinara sauce.\n8. Place the cooked chicken breasts on top of the sauce.\n9. Sprinkle mozzarella cheese on top of each chicken breast.\n10. Bake in the preheated oven for 25-30 minutes or until the chicken is cooked through and the cheese is bubbly and golden.\n11. Serve hot with pasta or a side salad.', 'Chicken Parmesan is a classic Italian-American dish. It combines tender and crispy breaded chicken with a flavorful marinara sauce and melted mozzarella cheese. It\'s a crowd-pleaser and a comfort food favorite.', 90, 'chicken-parmesan.jpeg'),
(4, 'Salmon Quinoa', '1 cup cooked quinoa; 4 oz grilled chicken breast, diced; 1/2 cup steamed broccoli florets; 1/2 cup diced cucumber; 1/4 cup cherry tomatoes, halved; 1/4 cup diced red bell pepper; 2 tablespoons hummus; 1 tablespoon olive oil; 1 tablespoon lemon juice; Salt and pepper to taste', '1. Cook quinoa according to package instructions and let it cool.\n2. Season grilled chicken breast with salt and pepper, then dice it.\n3. In a large bowl, combine cooked quinoa, diced chicken, steamed broccoli, diced cucumber, cherry tomatoes, and diced red bell pepper.\n4. In a small bowl, whisk together olive oil, lemon juice, salt, and pepper to create a dressing.\n5. Drizzle the dressing over the quinoa bowl.\n6. Top with hummus for extra protein and flavor.\n7. Toss the ingredients together until well combined.\n8. Serve as a protein-packed and nutritious meal.', 'This salmon quinoa bowl is an excellent choice for fitness enthusiasts. It\'s high in protein from the grilled chicken and quinoa, and it\'s loaded with vitamins and minerals from the vegetables. The hummus adds creaminess and extra protein for a satisfying meal.', 30, 'salmon-quinoa.jpg'),
(5, 'Breakfast Burrito', '2 large eggs; 1/4 cup black beans, drained and rinsed; 1/4 cup diced bell peppers; 1/4 cup diced onions; 1/4 cup diced tomatoes; 2 tablespoons shredded cheddar cheese; 2 whole wheat tortillas; Salt and pepper to taste; Salsa (optional)', '1. In a bowl, whisk the eggs and season with salt and pepper.\n2. Heat a non-stick skillet over medium heat and add a little oil or cooking spray.\n3. Add diced bell peppers and onions to the skillet and sauté until softened.\n4. Pour the beaten eggs into the skillet with the sautéed vegetables.\n5. Add black beans and diced tomatoes to the eggs.\n6. Cook, stirring occasionally, until the eggs are fully cooked.\n7. Divide the egg mixture between two whole wheat tortillas.\n8. Sprinkle shredded cheddar cheese on top.\n9. Fold in the sides of the tortilla and roll it up to create a burrito.\n10. Optional: Serve with salsa for extra flavor.\n11. Enjoy your high-protein breakfast!', 'This high-protein breakfast burrito is a great way to start your day with plenty of energy. It\'s rich in protein from the eggs and black beans and provides essential nutrients from the vegetables. The whole wheat tortilla adds fiber for sustained energy.', 25, 'breakfast-burrito.jpeg'),
(6, 'Greek Yogurt Parfait', '1 cup Greek yogurt; 1/4 cup granola; 1/4 cup mixed berries (strawberries, blueberries, raspberries); 1 tablespoon honey; 1/4 teaspoon vanilla extract', '1. In a glass or bowl, start by layering 1/4 cup of Greek yogurt at the bottom.\n2. Add a layer of granola on top of the yogurt.\n3. Next, add a layer of mixed berries.\n4. Repeat the layers until you fill the glass or bowl.\n5. Drizzle honey and a dash of vanilla extract over the top.\n6. Serve immediately or refrigerate for a cool and refreshing snack or breakfast.', 'The Greek yogurt parfait is a nutritious and satisfying snack or breakfast option. It\'s rich in protein from the Greek yogurt, fiber from the granola, and antioxidants from the mixed berries. The honey adds a touch of natural sweetness.', 15, 'yogurt_parfait.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `created_at`, `updated_at`) VALUES
(2, 'Anas Balla', 'anas@gmail.com', '$2b$10$jrKl7/uE4sO6tMh9qZfUjuezc4fluVNJSu85iYyEslY02oshlvtCS', '2023-09-11 12:26:23', '2023-09-11 12:26:23'),
(3, 'Mohamed Karim Balla', 'mohamedkarimballa19@gmail.com', '$2b$10$3EB2OIcbulK8AlB2vQxcj.ydAAQzwq9reLp/UmZ4.skN1dsICVu/W', '2023-09-12 12:54:30', '2023-09-12 12:54:30'),
(5, 'Ayman Hamdan', 'ayman@gmail.com', '$2b$10$yTNKTn.dBTCQOYeONu6b5umoTIuSR/uVQ/xGVBmhBx.AAtyVRIxF6', '2023-09-18 16:26:28', '2023-09-18 16:26:28'),
(7, 'Ahmed Moutawakil', 'ahmed@gmail.com', '$2b$10$KCexi3J/AvDAA524dLt/Cuf8gFvUTS4Dg2x.NROjwJDTFtv5nICGO', '2023-09-20 20:06:46', '2023-09-20 20:06:46');

-- --------------------------------------------------------

--
-- Table structure for table `users_programs`
--

CREATE TABLE `users_programs` (
  `user_id` bigint(20) NOT NULL,
  `program_id` bigint(20) NOT NULL,
  `joined_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users_programs`
--

INSERT INTO `users_programs` (`user_id`, `program_id`, `joined_at`) VALUES
(7, 1, '2023-09-20 20:10:42'),
(7, 5, '2023-09-20 20:11:08'),
(3, 2, '2023-09-21 19:46:19'),
(3, 3, '2023-09-21 19:46:29'),
(7, 2, '2023-09-21 19:55:01'),
(7, 6, '2023-09-21 19:56:21');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `coaches`
--
ALTER TABLE `coaches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `programs`
--
ALTER TABLE `programs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `coach_id` (`coach_id`);

--
-- Indexes for table `recipes`
--
ALTER TABLE `recipes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users_programs`
--
ALTER TABLE `users_programs`
  ADD KEY `FOREIGN KEY` (`user_id`),
  ADD KEY `FOREIGN KEY2` (`program_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `coaches`
--
ALTER TABLE `coaches`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `programs`
--
ALTER TABLE `programs`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `recipes`
--
ALTER TABLE `recipes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `programs`
--
ALTER TABLE `programs`
  ADD CONSTRAINT `programs_ibfk_1` FOREIGN KEY (`coach_id`) REFERENCES `coaches` (`id`);

--
-- Constraints for table `users_programs`
--
ALTER TABLE `users_programs`
  ADD CONSTRAINT `FOREIGN KEY` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `FOREIGN KEY2` FOREIGN KEY (`program_id`) REFERENCES `programs` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
