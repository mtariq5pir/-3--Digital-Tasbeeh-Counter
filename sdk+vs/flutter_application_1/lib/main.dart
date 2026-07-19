import 'package:flutter/material.dart';

void main() {
  runApp(const TasbeehApp());
}

class TasbeehApp extends StatelessWidget {
  const TasbeehApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.teal,
      ),
      home: const TasbeehHomeScreen(),
    );
  }
}

class TasbeehHomeScreen extends StatefulWidget {
  const TasbeehHomeScreen({super.key});

  @override
  State<TasbeehHomeScreen> createState() => _TasbeehHomeScreenState();
}

class _TasbeehHomeScreenState extends State<TasbeehHomeScreen> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  void _resetCounter() {
    setState(() {
      _counter = 0;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF1F5F9), // ہلکا خوبصورت بیک گراؤنڈ
      appBar: AppBar(
        title: const Text(
          'ڈیجیٹل تسبیح کاؤنٹر',
          style: TextStyle(fontWeight: FontWeight.bold, fontSize: 24),
        ),
        centerTitle: true,
        backgroundColor: Colors.teal,
        foregroundColor: Colors.white,
        elevation: 4,
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            // تسبیح کا بڑا ڈسپلے کارڈ
            Container(
              width: 250,
              height: 250,
              decoration: BoxDecoration(
                color: Colors.white,
                shape: BoxShape.circle,
                boxShadow: [
                  BoxShadow(
                    color: Colors.black.withOpacity(0.1),
                    blurRadius: 20,
                    spreadRadius: 5,
                  ),
                ],
                border: Border.all(color: Colors.teal, width: 8),
              ),
              alignment: Alignment.center,
              child: Text(
                '$_counter',
                style: const TextStyle(
                  fontSize: 70,
                  fontWeight: FontWeight.bold,
                  color: Colors.teal,
                ),
              ),
            ),
            const SizedBox(height: 50),
            
            // گنتی بڑھانے کا بٹن
            GestureDetector(
              onTap: _incrementCounter,
              child: Container(
                width: 120,
                height: 120,
                decoration: BoxDecoration(
                  color: Colors.teal,
                  shape: BoxShape.circle,
                  boxShadow: [
                    BoxShadow(
                      color: Colors.teal.withOpacity(0.4),
                      blurRadius: 15,
                      offset: const Offset(0, 8),
                    ),
                  ],
                ),
                child: const Icon(
                  Icons.add,
                  size: 50,
                  color: Colors.white,
                ),
              ),
            ),
            const SizedBox(height: 30),
            
            // ری سیٹ (Reset) کرنے کا بٹن
            ElevatedButton.icon(
              onPressed: _resetCounter,
              icon: const Icon(Icons.refresh),
              label: const Text('دوبارہ شروع کریں', style: TextStyle(fontSize: 16)),
              style: ElevatedButton.styleFrom(
                backgroundColor: Colors.redAccent,
                foregroundColor: Colors.white,
                padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(30),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}